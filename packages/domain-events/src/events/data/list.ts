import { SupabaseClient } from "@supabase/supabase-js";

export const list =
  (supabase: SupabaseClient) => 
  async (): Promise<any[]> => {
    const { data, error } = await supabase
      .from('events')
      .select()
      .is('deleted_at', "NULL");
    if (error) throw error;    
    return data
};