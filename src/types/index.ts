export interface BlogPost {
    _id: string;
    title: string;
    description: string;
    photo_url: string;
    created_at: string;
    updated_at: string;
    user_id: string;
  }
  
  export interface ApiResponse {
    data: BlogPost;
    message: string;
  }