import React from 'react';

const About = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh',
      padding: '2rem', 
    }}>
     
      <div style={{
        width: '300px',
        height: 'auto', 
        backgroundColor: 'black',
        borderRadius: '20px',
        color: 'white',
        padding: '2rem', 
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center', 
        marginRight: '2rem', 
      }}>
        
        <h2>About Our Recipes</h2>
        <p>Our app offers a wide variety of delicious and easy-to-follow recipes. Whether you’re a beginner in the kitchen or an experienced chef, we have something for everyone. From quick snacks to elaborate meals, our collection of recipes will inspire you to cook delicious dishes every day.</p>
      </div>

      <div style={{
        display: 'flex',
        flexDirection: 'column', 
        gap: '1rem', 
        justifyContent: 'center', 
        alignItems: 'center', 
      }}>
        {/* Card 1 */}
        <div style={{
          width: '300px',
          backgroundColor: 'lightgray',
          borderRadius: '10px',
          padding: '1rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <h3>Quick & Easy Recipes</h3>
          <p>Get recipes that you can prepare in under 30 minutes, perfect for busy weekdays or quick meals.</p>
        </div>

        {/* Card 2 */}
        <div style={{
          width: '300px',
          backgroundColor: 'lightgray',
          borderRadius: '10px',
          padding: '1rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <h3>Healthy & Nutritious Meals</h3>
          <p>Explore healthy recipes that provide balanced meals to keep you energized and satisfied.</p>
        </div>

        {/* Card 3 */}
        <div style={{
          width: '300px',
          backgroundColor: 'lightgray',
          borderRadius: '10px',
          padding: '1rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <h3>Dessert Delights</h3>
          <p>Indulge in a variety of sweet recipes that are perfect for any occasion, from simple cakes to fancy desserts.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
