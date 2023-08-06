import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://fycirvitqknwxfxhmsxu.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ5Y2lydml0cWtud3hmeGhtc3h1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTExMDEyNzgsImV4cCI6MjAwNjY3NzI3OH0.9xvvJH4kkf588OwO0P-rH7yKisty-Bycc1sX-S3IYjs";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
