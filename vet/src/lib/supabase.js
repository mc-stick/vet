/**
 * Configuración del Cliente Supabase
 * Variables necesarias en .env.local:
 * - VITE_SUPABASE_URL
 * - VITE_SUPABASE_ANON_KEY
 */

// import { createClient } from "@supabase/supabase-js"

// const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
// const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// if (!supabaseUrl || !supabaseKey) {
//   console.warn("⚠️ Supabase credentials not found. Using mock data as fallback.")
// }

// export const supabase = supabaseUrl && supabaseKey 
//   ? createClient(supabaseUrl, supabaseKey)
//   : null

/**
 * Hook para obtener datos de Supabase con fallback a mocks
 * @param {string} table - Nombre de la tabla en Supabase
 * @returns {Promise<Array>} Datos de Supabase o mock
 */
export async function fetchSupabaseData(table) {
  try {
    // if (!supabase) {
    //   throw new Error("Supabase not configured")
    // }

    // let query = supabase.from(table).select("*")

    // if (options.filter && options.value !== undefined) {
    //   query = query.eq(options.filter, options.value)
    // }

    // const { data, error } = await query

    // if (error) throw error
    // return data || []
    
    // TODO: Descomentar cuando Supabase esté configurado
    console.log("📡 Supabase datos (usando fallback)")
    return []
  } catch (error) {
    console.error(`Error fetching from Supabase (${table}):`, error.message)
    return []
  }
}

/**
 * Insertár datos en Supabase con validación
 * @param {string} table - Tabla destino
 * @param {object} record - Registro a insertar
 * @returns {Promise<object>} Respuesta de Supabase
 */
export async function insertSupabaseData(table, record) {
  try {
    // if (!supabase) {
    //   throw new Error("Supabase not configured")
    // }

    // const { data, error } = await supabase
    //   .from(table)
    //   .insert([record])
    //   .select()

    // if (error) throw error
    // return data?.[0] || null
    
    console.log(`✅ ${table} record inserted (mock)`)
    return { ...record, id: Date.now() }
  } catch (error) {
    console.error(`Error inserting into Supabase (${table}):`, error.message)
    throw error
  }
}
