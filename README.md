# 🌾 Rural Finance Management Web App

**Empowering rural communities with smart finance tools, AI-driven assistance, and budget optimization.**
Built with **TypeScript**, **React.js**, and **MongoDB**.

---

## 📌 Overview

This project is a **full-stack financial management web application** tailored for rural users. It combines **budget tracking, financial planning, AI-powered chat**, and a **custom-built Budget Optimizer API** to help users make informed decisions about their spending and savings.

The platform is designed to be **intuitive, offline-friendly, and mobile-accessible**, making it usable even in areas with limited internet access.

---

## ✨ Features

* **📊 Budget Optimizer API** – Developed from scratch to recommend optimal spending allocations based on income and expenses.
* **💬 AI Finance Assistant** – Integrated with a **HuggingFace model** for real-time, natural language interaction with users.
* **💵 Expense & Income Tracking** – Add, categorize, and view transactions with visual insights.
* **📈 Financial Reports** – Monthly and yearly analysis with easy-to-understand graphs.
* **🛠️ Rural Accessibility Features** – Simple UI, local caching, and minimal data usage.
* **🔒 Secure Data Handling** – All user data stored securely with MongoDB.

---

## 🏗️ Tech Stack

| Layer               | Technology Used                                  |
| ------------------- | ------------------------------------------------ |
| **Frontend**        | React.js, TypeScript                             |
| **Backend**         | Node.js, Express.js                              |
| **Database**        | MongoDB                                          |
| **AI Integration**  | HuggingFace Transformers API                     |
| **Custom Services** | Budget Optimizer API (self-developed)            |
| **Styling**         | Tailwind CSS / Styled Components (if applicable) |

---

## ⚙️ Installation & Setup

```bash
# Clone repository
git clone https://github.com/yourusername/rural-finance-management.git
cd rural-finance-management

# Install dependencies
npm install

# Create .env file for environment variables
touch .env
# Add your MongoDB URI, HuggingFace API key, and other configs

# Run development server
npm run dev
```

---

## 🔑 Environment Variables

Create a `.env` file in the root directory:

```
MONGO_URI="mongodb://localhost:27017/mydatabase"
```

---

## 🚀 Usage

1. **Sign up / Log in** to access personalized finance tools.
2. **Add transactions** (income/expense) to start tracking your finances.
3. **Use Budget Optimizer** to get suggestions on spending distribution.
4. **Chat with AI Assistant** for instant financial advice.
5. **View analytics & reports** to track progress over time.

---

## 📦 API Endpoints

### **Budget Optimizer**

```
POST /api/budget/optimize
Body: {
  "income": 20000,
  "expenses": [
    { "category": "Food", "amount": 5000 },
    { "category": "Education", "amount": 3000 }
  ]
}
```

**Response:**

```json
{
  "optimizedBudget": {
    "Food": 4500,
    "Education": 3200,
    "Savings": 3000
  }
}
```

---

## 🧠 AI Chatbot Integration

* Uses **HuggingFace Transformers** for context-aware financial conversation.
* Accessible via the **“Chat with Assistant”** button in the UI.

---

## 📅 Roadmap

* [ ] Add **multi-language support** for rural dialects.
* [ ] Offline-first **PWA support**.
* [ ] SMS-based financial updates for non-smartphone users.

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss.

---

## 📜 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Ayushman Pani**
