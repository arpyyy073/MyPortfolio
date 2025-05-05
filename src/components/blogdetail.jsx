import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../assets/style/blogdetail.css';
import blog1 from "../assets/images/city2.jpg"
import blog2 from "../assets/images/subicpolice.jpg"
import blog3 from "../assets/images/nationalm.jpg"
import blog4 from "../assets/images/hytec2.jpg"
import blog5 from "../assets/images/santolan.jpg"
import blog6 from "../assets/images/PMAgroup.jpg"
import blog7 from "../assets/images/nightmarket.jpg"


const blogPosts = [
  {
    id: 1,
    title: 'Luneta Park',
    date: 'April 7, 2025',
    image: blog1,
    content: `
      We had a memorable day exploring the expansive and historic Rizal Park, located in the heart of Manila. As we walked along its broad pathways, we paused at the famed Rizal Monument to quietly honor the legacy of the national hero. The park was alive with activity—families picnicking, joggers weaving through the gardens, and children laughing by the fountains. It was a beautiful blend of history and modern life, a place where the past lingers in every corner, telling tales of colonial hardship, the fight for freedom, and the resilient Filipino spirit.
    `
  },
  {
    id: 2,
    title: 'Subic',
    date: 'April 8, 2025',
    image: blog2,
    content: `
      Our adventure led us to the lively SBMA Seaport, where maritime trade meets coastal relaxation. The scent of the sea lingered in the air as we watched colossal cargo ships arrive, their cranes operating with precise, rhythmic motion. Yet beyond the industrial scene, the boardwalk offered a softer touch—charming cafés and scenic parks filled with families and tourists capturing moments by the sparkling bay. A few elegant yachts swayed gently in the harbor, hinting at the more lavish side of seafaring. The blend of bustling activity and laid-back vibes gave the place a unique and captivating character.
    `
  },
  {
    id: 3,
    title: 'National Museum',
    date: 'April 9, 2025',
    image: blog3,
    content: `
      Visiting the National Museum of Natural History felt like stepping into a magnificent time capsule. Right at the entrance, the striking Tree of Life structure set the tone for an extraordinary experience. As we moved through the exhibits, we were immersed in the rich biodiversity of the Philippines—from towering dinosaur fossils to detailed dioramas showcasing the country’s unique wildlife and plant life. We admired rare, preserved species found only in the archipelago and engaged with interactive displays that made learning even more exciting. By the time we left, we weren’t just more knowledgeable—we were inspired with a deeper appreciation for the natural world.
    `
  },
  {
    id: 4,
    title: 'Hytec Power Inc.',
    date: 'April 10, 2025',
    image: blog4,
    content: `
      Our visit to Hytec Power was truly enlightening. The facility rose like a testament to modern engineering and innovation, its sleek metallic structure shining beneath the midday sun. As we stepped inside, we were taken through different departments, each alive with the rhythm of machines and skilled professionals at work. Engineers and technicians walked us through the complex operations that support the nation’s industrial energy systems. What stood out most was the company's dedication to sustainability and energy efficiency. More than just a tour, it was an immersive experience that offered insight into the heart of contemporary industry and a promising vision for the future of Filipino technology.
    `
  },
  {
    id: 5,
    title: 'LRT - LINE 2',
    date: 'April 11, 2025',
    image: blog5,
    content: `
      Riding the LRT Line 2 was more than just a commute—it was a window into the everyday lives of countless Manila residents. As the train glided effortlessly above the cityscape, we watched the patchwork of rooftops and the pulse of traffic below. Each stop revealed a different side of urban life—some nestled among vibrant markets, others flanked by soaring office towers. Conversations with fellow commuters shed light on the struggles they face, from overcrowded trains to frequent delays and the pressing need for system upgrades. Yet despite the challenges, there was a strong sense of perseverance—a collective spirit pushing forward. More than transportation, the LRT served as a vital thread stitching together the diverse stories of the city.
    `
  },
  {
    id: 6,
    title: 'Welcome to Baguio',
    date: 'April 12, 2025',
    image: blog6,
    content: `
      Nestled on the outskirts of Baguio, the Bell Church welcomed us with its elaborate arches, majestic dragon sculptures, and bright red lanterns dancing softly in the crisp mountain air. The temple exuded tranquility, with sweeping views of the surrounding hills adding to its peaceful charm. As we wandered through its hushed walkways, we took in the beautiful blend of Chinese and Filipino architectural influences. A quiet sense of reverence lingered in the atmosphere, occasionally punctuated by the gentle ringing of the ceremonial bell. It was a serene escape from urban life—a sacred space where diverse cultures harmoniously came together.
    `
  },
  {
    id: 7,
    title: 'Baguio Night Market',
    date: 'April 13, 2025',
    image: blog7,
    content: `
      As night settled over Baguio, we were drawn into the lively pulse of the night market. The streets came alive with the hum of conversations and the mouthwatering scent of street food wafting through the air. My friends and I explored each stall with eager curiosity, taking in the colorful displays of thrifted clothes, handmade crafts, and local treats—from smoky grilled isaw to sweet, freshly made strawberry taho. It felt like a joyful scavenger hunt, with every discovery offering a glimpse into local culture. Laughter rang out as we bargained with vendors and indulged in every bite. That evening, the market wasn’t just a place to shop—it was the soul of Baguio after dark.
    `
  },
  // Add the rest of your posts here...
];

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find((p) => p.id === parseInt(id));

  if (!post) {
    return <div className="blog-detail container">Post not found.</div>;
  }

  return (
    <div className="blog-detail">
      <div className="container">
        <button className="back-button" onClick={() => navigate('/blog')}>
          ← Back to Blog
        </button>

        <h1 className="post-title">{post.title}</h1>
        <p className="post-date">{post.date}</p>

        <img src={post.image} alt={post.title} className="post-image" />

        <div className="post-content">
          {post.content.split('\n').map((paragraph, i) => (
            <p key={i}>{paragraph.trim()}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
