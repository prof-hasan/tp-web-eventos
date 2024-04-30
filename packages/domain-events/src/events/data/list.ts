import { type SupabaseClient } from "@supabase/supabase-js";
import { type EventsEntity as Events, type EventsModel } from "../types";
import { fromModel } from "../adapters";

export const list =
  (supabase: SupabaseClient) => 
  async (): Promise<Events[]> => {
    const { data, error } = await supabase
      .from('events')
      .select()
      .is('deleted_at', "NULL");
    if (error) throw error;    

    return data.map((event: EventsModel) => fromModel(event));
};