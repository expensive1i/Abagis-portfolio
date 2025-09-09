export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  author: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Transforming Governance Through Digital Innovation",
    excerpt: "Exploring how technology can bridge the gap between citizens and government, creating more transparent and accessible public services.",
    content: `
      <p>In today's rapidly evolving digital landscape, the intersection of technology and governance presents unprecedented opportunities to transform how citizens interact with their governments. As we navigate through the complexities of modern society, digital innovation emerges as a powerful catalyst for change.</p>
      
      <p>The traditional barriers between citizens and government institutions are being dismantled through innovative digital solutions. From online service portals to real-time data transparency platforms, technology is creating new pathways for civic engagement and public accountability.</p>
      
      <h3>The Digital Transformation Imperative</h3>
      <p>Governments worldwide are recognizing the urgent need to modernize their operations and citizen services. This transformation isn't just about adopting new technologies—it's about fundamentally reimagining how public services are delivered and how citizens participate in democratic processes.</p>
      
      <p>Key areas of focus include:</p>
      <ul>
        <li>Transparent data sharing and open government initiatives</li>
        <li>Streamlined digital service delivery</li>
        <li>Enhanced citizen engagement platforms</li>
        <li>Real-time feedback and accountability mechanisms</li>
      </ul>
      
      <p>As we continue to build more inclusive and responsive governance systems, the role of technology becomes increasingly central to achieving our democratic ideals.</p>
    `,
    date: "December 15, 2024",
    category: "Governance",
    readTime: "5 min read",
    image: "/images/LucysGallery(29).jpg",
    author: "Lucy James Abagi"
  },
  {
    id: 2,
    title: "The Future of Civic Engagement in Africa",
    excerpt: "A deep dive into how digital platforms are revolutionizing citizen participation and democratic processes across the continent.",
    content: `
      <p>Africa stands at the forefront of a digital revolution that is reshaping civic engagement and democratic participation. Across the continent, innovative platforms and technologies are empowering citizens to take an active role in governance and social change.</p>
      
      <p>The traditional model of top-down governance is being challenged by bottom-up citizen engagement initiatives that leverage digital tools to amplify voices and drive change. From mobile voting systems to community monitoring platforms, technology is democratizing access to political participation.</p>
      
      <h3>Emerging Trends in Digital Democracy</h3>
      <p>Several key trends are emerging across African nations that point to a more engaged and digitally-enabled citizenry:</p>
      
      <ul>
        <li>Mobile-first civic engagement platforms</li>
        <li>Community-driven accountability mechanisms</li>
        <li>Real-time government transparency initiatives</li>
        <li>Youth-led digital activism movements</li>
      </ul>
      
      <p>These developments represent a fundamental shift in how democracy functions in the digital age, creating new opportunities for inclusive governance and citizen empowerment.</p>
    `,
    date: "December 10, 2024",
    category: "Civic Tech",
    readTime: "7 min read",
    image: "/images/LucysGallery(35).jpg",
    author: "Lucy James Abagi"
  },
  {
    id: 3,
    title: "Building Inclusive Digital Solutions",
    excerpt: "Lessons learned from developing technology solutions that serve all communities, regardless of their digital literacy levels.",
    content: `
      <p>Creating truly inclusive digital solutions requires more than just technical expertise—it demands a deep understanding of diverse user needs, accessibility requirements, and the digital divide that exists across different communities.</p>
      
      <p>In our work at PPDC, we've learned that successful digital inclusion means designing solutions that work for everyone, from tech-savvy urban users to rural communities with limited internet access. This approach has shaped how we develop and deploy civic technology platforms.</p>
      
      <h3>Key Principles for Inclusive Design</h3>
      <p>Our experience has taught us several critical principles for building inclusive digital solutions:</p>
      
      <ul>
        <li>Multi-language support and localization</li>
        <li>Offline functionality for low-connectivity areas</li>
        <li>Simple, intuitive user interfaces</li>
        <li>Accessibility features for users with disabilities</li>
        <li>Community-driven feedback and iteration</li>
      </ul>
      
      <p>By prioritizing inclusion in our design process, we ensure that our digital solutions truly serve the communities they're intended to help, rather than creating new barriers to participation.</p>
    `,
    date: "December 5, 2024",
    category: "Innovation",
    readTime: "6 min read",
    image: "/images/LucysGallery(42).jpg",
    author: "Lucy James Abagi"
  }
];

export const categories = ['All', 'Governance', 'Civic Tech', 'Innovation'];
