# **TextCanvas**  
**A Full-Stack Text-to-Image SaaS Application**

## **Overview**  
TextCanvas is an innovative SaaS application that transforms text into visually appealing images. Built with a full-stack architecture, it utilizes the Clipdrop API to generate high-quality text-to-image transformations. This project focuses on providing an intuitive and efficient user experience, catering to users looking to create stunning visuals without any prior design expertise.

---

## **Features**  
- **Text-to-Image Conversion**: Converts user-provided text into visually engaging images.  
- **Intuitive Interface**: Simplistic UI for seamless interaction and ease of use.  
- **User Authentication**: Secure sign-up/login functionality for personalized experiences.  
- **Premium Features**: Additional styling options and enhanced resolutions for paid users.  
- **Payment Integration**: Razorpay integration for secure and hassle-free transactions.

---

## **Tech Stack**  
### **Frontend**  
- React.js  
- Tailwind CSS

### **Backend**  
- Node.js  
- Express.js  

### **Database**  
- MongoDB  

### **Third-Party Integrations**  
- Clipdrop API (Text-to-Image Conversion)  
- Razorpay (Payment Gateway)

---

## **Setup Instructions**  
### Prerequisites  
Ensure you have the following installed:  
- Node.js  
- MongoDB  
- Git  

### Installation  
1. Clone the repository:  
   ```bash
   git clone https://github.com/yourusername/textcanvas.git
   cd textcanvas


2. Install dependencies:  
   ```bash
   npm install
   cd client
   npm install
   cd ..

3. Configure environment variables:
    Create a .env file in the root directory with the following:

    ```
    PORT=5000
    MONGO_URI=your_mongo_connection_string
    CLIPDROP_API_KEY=your_clipdrop_api_key
    RAZORPAY_KEY=your_razorpay_key

4. Start the server:  
    ```bash
    npm run start
    ```

5. Start the client:  
    ```bash
    cd client
    npm run dev
    ```