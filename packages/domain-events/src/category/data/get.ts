import { SupabaseClient } from '@supabase/supabase-js';
import { fromModel } from '../adapters';

export const getByCategoryId = (supabase: SupabaseClient) => async (categoryId: string) => {
  const { data, error } = await supabase.from('events_categories').select(`*`).eq('id', categoryId);
  if (error) throw error;

  return fromModel(data[0]);
};
