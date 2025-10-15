import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

const supabaseUrl = 'https://dash.erlli.com/api';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJvbGUiOiJhbm9uIiwiaWF0IjoxNzU2MTcwMTMzLCJleHAiOjIwNzE1MzAxMzN9.Sik1a3Sg-6nokPU0DNKurbrYzjSaPfPaOXtnj2qjRdk';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);