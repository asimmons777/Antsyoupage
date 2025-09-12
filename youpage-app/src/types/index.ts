// Shared TypeScript interfaces (currently unused in components, kept for future expansion)

// Props you might use for a more dynamic YouPage component one day.
export interface YouPageProps {
  title: string;      // Main heading text
  content: string;    // Body copy or description
  footer?: string;    // Optional custom footer text
}

// Example domain model: a user of the site / system.
export interface User {
  id: number;         // Unique numeric identifier
  name: string;       // Display name
  email: string;      // Contact email
}

// Example blog post / project note structure referencing a User.
export interface Post {
  id: number;         // Unique post ID
  title: string;      // Post title
  body: string;       // Main content body
  author: User;       // Author relationship
}

// Remove this file later if you decide you won't use shared interfaces.