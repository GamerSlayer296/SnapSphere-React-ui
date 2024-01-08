# SnapSphere: Snap,Connect and Share your Way

Welcome to SnapSphere, a modern social media platform crafted with a focus on user experience, dynamic theming, and robust functionalities. Snap, share, and discover moments with ease, all while enjoying a seamless, responsive interface.

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#key-features">Key Features</a>
    </li>
    <li>
      <a href="#technologies-used">Technologies used</a>
    </li>
    <li><a href="#project-structure">Project Structure</a></li>
    <li><a href="#getting-started">Getting Started</a></li>
    <li><a href="#future-enhancements">Future enhancements</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

## Key Features
1. **User Authentication:**
* Secure Authentication: Built with the React Context API, SnapSphere ensures that user data remains protected and offers functionalities for user registration, login, and profile management.

  ![image](https://github.com/GamerSlayer296/SnapSphere-React-ui/assets/117532468/0102d816-2823-42c2-aa7a-bd174ce8272b)
  ![image](https://github.com/GamerSlayer296/SnapSphere-React-ui/assets/117532468/16593de7-03cd-4bfd-a59d-6951816f2d6b)


  
2. **Dynamic Theming:**
* Customizable Themes: Experience SnapSphere in your preferred ambiance with our dynamic theming system, offering both light and dark modes. The integration of SCSS and React   provides a seamless transition between themes, adapting to user preferences effortlessly.
* 
  ![image](https://github.com/GamerSlayer296/SnapSphere-React-ui/assets/117532468/6bd0819a-7e42-4102-8a17-ff379695d891)

  
3. **Responsive Design:**
Optimized for All Devices: With SCSS mixins, SnapSphere guarantees a responsive design tailored for mobile and tablet users, ensuring a consistent and enjoyable user experience across various screen sizes.

![image](https://github.com/GamerSlayer296/SnapSphere-React-ui/assets/117532468/34cdc659-0669-4a5b-b120-9ae48fece4d6)


5. **Profile Management:**
Personalized Profiles: Users can create, personalize, and manage their profiles, enriching their visibility with dedicated sections for user details, social media links, and a dynamic feed for shared moments.
![image](https://github.com/GamerSlayer296/SnapSphere-React-ui/assets/117532468/f8f85f1d-a218-4a7e-a0f0-7ecae776fff1)


7. **Navigation & Layout:**
* Intuitive Navigation: SnapSphere's intuitive navigation system, comprising a top navbar and sidebars, offers easy access to different sections, enhancing user accessibility and interaction.
  ![image](https://github.com/GamerSlayer296/SnapSphere-React-ui/assets/117532468/17e6494f-ecc6-4d96-b161-ab9f63aa2dd3)

  

6. **Protection & Security:**
Safe & Secure: SnapSphere employs protected routes and secure authentication practices, prioritizing user data privacy and ensuring a safe environment for all users.

## Technologies Used

* __Frontend:__ React, React Router, SCSS
* __State Management:__ React Context API
* __Styling:__ SCSS Mixins for responsive design and dynamic theming
* __Routing:__ Custom routing implemented with React Router

## Project Structure

```
SnapSphere/
│
├── src/
│   ├── pages/
│   │   ├── login/
│   │   ├── register/
│   │   ├── home/
│   │   └── profile/
│   ├── Components/
│   │   ├── navbar/
│   │   ├── leftBar/
│   │   └── rightBar/
│   ├── context/
│   │   ├── context.jsx
│   │   └── authContext.jsx
│   ├── App.jsx
│   └── index.js
│
├── styles/
│   ├── _variables.scss
│   └── main.scss
│
└── README.md
```


## Getting Started
To run this project locally:

1. Clone the repo
   ```sh
   git clone https://github.com/GamerSlayer296/snapshere-react-ui
   ```
2. navigate to the project directory
   ```sh
     cd snapshere
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
5. Open the web page in the browser from the terminal using NPM
   ```sh
   npm run dev
   ```

<p align="right">(<a href="#sooshi">back to top</a>)</p>

## Future Enhancements

* __Messaging System:__ Introduce a direct messaging feature for users to communicate privately.
* __Explore Section:__ Create an explore section where users can discover trending posts, hashtags, or users.
* __Notification System:__ Implement a real-time notification system to alert users about likes, comments, or new followers.
* __Scalability:__ Design the backend architecture to handle increased traffic and data storage requirements as the platform scales.
* __Two-Factor Authentication (2FA):__ Implement additional security measures like 2FA to further protect user accounts.
* __User Analytics:__ Integrate analytics tools to gather insights into user behavior, preferences, and engagement patterns.
* 

## Acknowledgements
* Lama Dev https://github.com/safak


Thank you for exploring the SnapSphere repository! For any questions or feedback, feel free to reach out. Happy coding! 🖥️
