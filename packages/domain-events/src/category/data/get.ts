import { SupabaseClient } from "@supabase/supabase-js";
import { EventsCategoryEntity, EventsCategoryModel } from "../types";
import { fromModel } from "../adapters";

export const getById = (supabase: SupabaseClient) => async (id: string): Promise<EventsCategoryEntity> => {
  const { data, error } = await supabase.from('events_category').select(`*`).eq('id', id);
  if (error) throw error;

  return fromModel(data[0] as EventsCategoryModel);
};
