import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://ozmeyvjxyrtvuzlkreim.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im96bWV5dmp4eXJ0dnV6bGtyZWltIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5NDY2ODU2MCwiZXhwIjoyMDEwMjQ0NTYwfQ.zraMHzgtpvU2U0PDCsF0oFBW5fT3G3vrHpfO67niptY"
);
