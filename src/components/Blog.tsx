const blogPosts = [
  {
    title: "Cloud Platforms Comparison",
    excerpt: "A look at how major cloud platforms compare against each other.",
    date: "Oct 17, 2021",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=200&fit=crop",
    link: "#",
  },
  {
    title: "Containers & Orchestration",
    excerpt: "Understanding containerization and how orchestration tools work together.",
    date: "Oct 21, 2021",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=400&h=200&fit=crop",
    link: "#",
  },
  {
    title: "Design to Code Workflows",
    excerpt: "How modern frameworks bridge the gap between design tools and production code.",
    date: "Oct 14, 2021",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=200&fit=crop",
    link: "#",
  },
];

const Blog = () => {
  return (
    <section id="blog" className="py-20 px-6 md:px-16 lg:px-24 bg-card">
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">Blog</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {blogPosts.map((post, i) => (
          <a
            key={i}
            href={post.link}
            className="bg-secondary rounded-xl overflow-hidden group hover:-translate-y-1 transition-transform duration-300 block"
          >
            <div className="h-44 overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div className="p-5">
              <p className="text-muted-foreground text-xs mb-2">{post.date}</p>
              <h3 className="text-foreground font-semibold mb-1">{post.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {post.excerpt}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Blog;
