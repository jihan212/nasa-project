# NASA Mission Control 🚀

A modern, sci-fi themed web application for managing NASA space missions. This project features a stunning futuristic UI with space-themed animations and provides functionality for launching missions to exoplanets discovered by the Kepler telescope.

## ✨ Features

-   **Mission Launch Management**: Schedule and manage space missions to exoplanets
-   **Exoplanet Database**: Browse planets discovered by the Kepler telescope
-   **Mission History**: View past and upcoming launches
-   **Futuristic UI**: Sci-fi themed interface with space animations and effects
-   **Real-time Mission Control**: Submit and abort launches with visual feedback
-   **Responsive Design**: Works on desktop and mobile devices

## 🛠️ Tech Stack

### Frontend

-   **React 18** - Modern React with hooks
-   **React Router** - Client-side routing
-   **Arwes** - Sci-fi UI framework for futuristic design
-   **CSS3** - Custom animations and styling

### Backend

-   **Node.js** - JavaScript runtime
-   **Express.js** - Web framework
-   **CORS** - Cross-origin resource sharing
-   **CSV Parser** - Data processing for Kepler exoplanet data

## 📁 Project Structure

```
nasa-project/
├── client/                 # React frontend
│   ├── public/            # Static assets
│   │   ├── img/          # Background images
│   │   └── sound/        # Audio effects
│   └── src/
│       ├── components/   # Reusable UI components
│       ├── hooks/        # Custom React hooks
│       ├── pages/        # Main application pages
│       └── settings.js   # Theme and resource configuration
├── server/                # Node.js backend
│   ├── data/             # Kepler exoplanet data
│   └── src/
│       ├── models/       # Data models
│       └── routes/       # API endpoints
└── README.md
```

## 🚀 Getting Started

### Prerequisites

-   Node.js (v14 or higher)
-   npm or yarn package manager

### Installation

1. **Clone the repository**

    ```bash
    git clone <repository-url>
    cd nasa-project
    ```

2. **Install backend dependencies**

    ```bash
    cd server
    npm install
    ```

3. **Install frontend dependencies**
    ```bash
    cd ../client
    npm install
    ```

### Running the Application

1. **Start the backend server**

    ```bash
    cd server
    npm start
    ```

    The server will run on `http://localhost:5000`

2. **Start the frontend development server**
    ```bash
    cd client
    npm start
    ```
    The application will open in your browser at `http://localhost:3000`

## 🎮 Usage

### Mission Launch

1. Navigate to the Launch page
2. Fill in the mission details:
    - **Mission Name**: Name of your space mission
    - **Rocket Name**: Name of the rocket
    - **Launch Date**: Select the launch date
    - **Target Planet**: Choose from available exoplanets
3. Click "Launch Mission" to submit

### Viewing Missions

-   **Upcoming**: See scheduled launches
-   **History**: View past mission attempts

### Mission Control

-   Submit new missions with real-time feedback
-   Abort missions if needed
-   View mission status and details

## 🌟 Key Features

### Sci-Fi UI Design

-   Space-themed background with animated stars
-   Glowing effects and futuristic typography
-   Smooth animations and transitions
-   Responsive design for all devices

### Exoplanet Data

-   Real data from NASA's Kepler mission
-   Detailed information about discovered planets
-   Interactive planet selection

### Mission Management

-   Complete mission lifecycle management
-   Real-time status updates
-   Mission history tracking

## 🔧 Development

### Available Scripts

**Backend (server/)**

-   `npm start` - Start the production server
-   `npm run watch` - Start development server with nodemon

**Frontend (client/)**

-   `npm start` - Start development server
-   `npm run build` - Build for production
-   `npm test` - Run tests
-   `npm run eject` - Eject from Create React App

### API Endpoints

-   `GET /planets` - Get all available exoplanets
-   `GET /launches` - Get all launches
-   `POST /launches` - Submit a new launch
-   `DELETE /launches/:id` - Abort a launch

## 📊 Data Sources

The application uses real exoplanet data from NASA's Kepler mission, stored in `server/data/kepler_data.csv`. This includes:

-   Planet names and identifiers
-   Orbital characteristics
-   Discovery information

## 🎨 Customization

### Themes

The application uses a configurable theme system in `client/src/settings.js`:

-   Color schemes
-   Typography
-   Animation settings
-   Sound effects

### Styling

-   Custom CSS animations for space effects
-   Responsive design breakpoints
-   Modular component styling

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 🙏 Acknowledgments

-   NASA for the Kepler exoplanet data
-   Arwes team for the sci-fi UI framework
-   React community for the excellent documentation

---

**Ready to explore the cosmos? Launch your first mission today!** 🚀✨
