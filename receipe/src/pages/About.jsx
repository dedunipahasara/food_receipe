import React, { useState } from 'react';

const quickRecipesImage = 'https://i.pinimg.com/236x/36/c4/ed/36c4ed9a9f6da52c08a8174bdefb119b.jpg';
const healthyMealsImage = 'https://i.pinimg.com/236x/bc/52/f1/bc52f19aaff7ad1e98cd0881c3d9e553.jpg';
const dessertDelightsImage = 'https://i.pinimg.com/736x/1b/d8/a9/1bd8a91f5a9ee609c7d4fff990767708.jpg';
const aboutRecipeImage = 'https://i.pinimg.com/736x/7f/35/e9/7f35e94dae426ccfc73d0f89c9c72de8.jpg';

const About = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const cardStyle = (index) => ({
    width: '500px',
    backgroundColor: hoveredCard === index ? '#F38C79' : 'white',
    borderRadius: '10px',
    padding: '1rem',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  });

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      padding: '1rem',
      flexWrap: 'wrap',
      backgroundColor: '#FFECDB'
    }}>
      {/* Left Card */}
      <div style={{
        width: '500px',
        height: '500px',
        backgroundImage: `url(${aboutRecipeImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '20px',
        padding: '3rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        marginRight: '3rem',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          backdropFilter: 'blur(10px)',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '15px',
          padding: '2rem',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          color: 'white',
          width: '100%',
          height: '100%',
          zIndex: 2,
          textAlign: 'center',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around'
        }}>
          <h2 style={{ fontWeight: 'bold' }}>About Our Recipes</h2>
          <p style={{ fontWeight: 'bold' }}>
            Our app offers a wide variety of delicious and easy-to-follow recipes. Whether you’re a beginner in the kitchen or an experienced chef, we have something for everyone.
          </p>
        </div>
      </div>

      {/* Right Cards */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: '3rem',
      }}>
        {/* Card 1 */}
        <div
          style={cardStyle(1)}
          onMouseEnter={() => setHoveredCard(1)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <div style={{
            width: '350px',
            height: '150px',
            backgroundImage: `url(${quickRecipesImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '10px',
          }}></div>
          <div style={{ marginLeft: '1rem' }}>
            <h3 style={{ fontWeight: 'bolder' }}>Quick & Easy Recipes</h3>
            <p style={{ fontWeight: 'bolder' }}>Get recipes you can prepare in under 30 minutes.</p>
          </div>
        </div>

        {/* Repeat the same pattern for Card 2 and Card 3 using index 2 and 3 */}
        <div
          style={cardStyle(2)}
          onMouseEnter={() => setHoveredCard(2)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <div style={{
            width: '350px',
            height: '150px',
            backgroundImage: `url(${healthyMealsImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '10px',
          }}></div>
          <div style={{ marginLeft: '1rem' }}>
            <h3 style={{ fontWeight: 'bold' }}>Healthy & Nutritious Meals</h3>
            <p style={{ fontWeight: 'bold' }}>Balanced meals to keep you energized.</p>
          </div>
        </div>

        <div
          style={cardStyle(3)}
          onMouseEnter={() => setHoveredCard(3)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <div style={{
            width: '350px',
            height: '150px',
            backgroundImage: `url(${dessertDelightsImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '10px',
          }}></div>
          <div style={{ marginLeft: '1rem' }}>
            <h3 style={{ fontWeight: 'bold' }}>Dessert Delights</h3>
            <p style={{ fontWeight: 'bold' }}>Delicious sweet treats for any occasion.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
