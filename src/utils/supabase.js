import { createClient } from '@supabase/supabase-js';

const supabaseUrl ="https://vqpirjaqwihjhvqjorsn.supabase.co"
const supabaseKey ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZxcGlyamFxd2loamh2cWpvcnNuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjUyOTY5ODEsImV4cCI6MjA0MDg3Mjk4MX0.iWzvWmGJRkv__X--KmWNCtZbRU27ss7JJcOnOujtQbk"
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;