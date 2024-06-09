import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://uqvucepvhqdmyildgfpy.supabase.co'
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVxdnVjZXB2aHFkbXlpbGRnZnB5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc1Nzc1MDgsImV4cCI6MjAzMzE1MzUwOH0.--5KucG48URbBury3pw4Lgv1f9yrx7l_z8zPyH_09XA'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
