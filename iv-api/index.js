const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

// Initialize Express
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect("mongodb+srv://emma46574:xmOW689TffsYAQfT@cluster0.cobdi6z.mongodb.net/adhoreiv?retryWrites=true&w=majority&appName=Cluster0", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on("connected", () => console.log("Connected to MongoDB!"));
db.on("error", (err) => console.error("MongoDB connection error:", err));

// Define the booking schema
const bookingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  date: { type: Date, required: true },
  cart: [
    {
      name: { type: String, required: true },
      category: { type: String, required: true },
      price: { type: Number, required: true },
    },
  ],
  totalPrice: { type: Number, required: true },
  status: { type: String, default: 'pending' },
}, { timestamps: true });

// Create the booking model
const Booking = mongoose.model("Booking", bookingSchema);




const messageSchema = new mongoose.Schema(
  {
    sender: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      match: [/^\S+@\S+\.\S+$/, "Invalid email format"],
    },
    message: {
      type: String,
      required: true,
      minlength: 5,
    },
    phone: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

const Message  = mongoose.model("Message", messageSchema);


// API Routes

// Health Check
app.get("/", (req, res) => {
  res.send("Booking API is running!");
});

// Handle booking submission
app.post("/api/bookings", async (req, res) => {
  try {
    const { name, phone, date, cart } = req.body;

    // Validate required fields
    if (!name || !phone || !date || !cart || cart.length === 0) {
      return res.status(400).json({ message: "All fields are required!" });
    }

    // Calculate total price
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    // Create a new booking
    const newBooking = new Booking({
      name,
      phone,
      date,
      cart,
      totalPrice,
    });

    // Save to database
    await newBooking.save();

    res.status(201).json({ message: "Booking successfully created!", booking: newBooking });
  } catch (error) {
    console.error("Error saving booking:", error);
    res.status(500).json({ message: "Internal server error." });
  }
});




// Fetch all bookings
app.get("/api/all-bookings", async (req, res) => {
  try {
    // Fetch the latest booking(s) from the database (sorted by booking date)
    const bookings = await Booking.find()
                                  .sort({ createdAt: -1 })  // Sort by createdAt field in descending order

    res.status(200).json({ bookings });
  } catch (error) {
    console.error("Error fetching bookings:", error);
    res.status(500).json({ message: "Internal server error." });
  }
});




// Fetch booking by ID
app.get("/api/bookings/:id", async (req, res) => {
  try {
    const { id } = req.params; // Extract the booking ID from the URL params

    // Find the booking by ID in the database
    const booking = await Booking.findById(id);

    // If no booking is found, return a 404 error
    if (!booking) {
      return res.status(404).json({ message: "Booking not found." });
    }

    res.status(200).json({ booking }); // Return the booking details
  } catch (error) {
    console.error("Error fetching booking by ID:", error);
    res.status(500).json({ message: "Internal server error." });
  }
});



app.put("/api/bookings/:id/status", async (req, res) => {
  const { id } = req.params;  // Extract booking ID from the URL
  const { status } = req.body;  // Extract new status from the request body

  try {
    // Find the booking by ID
    const booking = await Booking.findById(id);

    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    // Update the status of the booking
    booking.status = status;

    // Save the updated booking
    await booking.save();

    res.status(200).json({ message: "Booking status updated", booking });
  } catch (error) {
    console.error("Error updating booking status:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});




// customer message handlers
app.post("/api/messages", async (req, res) => {
  const { sender, email, message, phone } = req.body;

  if (!sender || !email || !message || !phone) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    const newMessage = new Message({ sender, email, message, phone });
    await newMessage.save();
    res.status(201).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error saving message:", error);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
});

// get all user messages
app.get("/api/msg", async (req, res) => {
  try {
    // Fetch the latest messages(s) from the database (sorted by msg date date)
    const msg = await Message.find()
                                  .sort({ createdAt: -1 })  // Sort by createdAt field in descending order

    res.status(200).json({ msg });
  } catch (error) {
    console.error("Error fetching messages:", error);
    res.status(500).json({ message: "Internal server error." });
  }
});


// Start the server
app.listen(PORT, () => console.log(`Server running `));
