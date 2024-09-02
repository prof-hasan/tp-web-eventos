import { SupabaseClient } from "@supabase/supabase-js";
import { EventsCategoryEntity } from "../types";
import { fromModel } from "../adapters";

export const list = (supabase: SupabaseClient) => async (): Promise<EventsCategoryEntity[]> => {
  const { data, error } = await supabase.from('events_categories').select(`*`);
  if (error) throw error;
  
  return data.map(fromModel);
};
