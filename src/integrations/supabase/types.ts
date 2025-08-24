export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.4"
  }
  public: {
    Tables: {
      ai_responses: {
        Row: {
          category: Database["public"]["Enums"]["ai_category"]
          confidence: number | null
          created_at: string
          id: string
          query: string
          response: string
          user_id: string
        }
        Insert: {
          category: Database["public"]["Enums"]["ai_category"]
          confidence?: number | null
          created_at?: string
          id?: string
          query: string
          response: string
          user_id: string
        }
        Update: {
          category?: Database["public"]["Enums"]["ai_category"]
          confidence?: number | null
          created_at?: string
          id?: string
          query?: string
          response?: string
          user_id?: string
        }
        Relationships: []
      }
      goals: {
        Row: {
          category: Database["public"]["Enums"]["goal_category"]
          completed: boolean | null
          created_at: string
          deadline: string | null
          description: string | null
          id: string
          priority: Database["public"]["Enums"]["goal_priority"] | null
          progress: number | null
          title: string
          updated_at: string
          user_id: string
        }
        Insert: {
          category: Database["public"]["Enums"]["goal_category"]
          completed?: boolean | null
          created_at?: string
          deadline?: string | null
          description?: string | null
          id?: string
          priority?: Database["public"]["Enums"]["goal_priority"] | null
          progress?: number | null
          title: string
          updated_at?: string
          user_id: string
        }
        Update: {
          category?: Database["public"]["Enums"]["goal_category"]
          completed?: boolean | null
          created_at?: string
          deadline?: string | null
          description?: string | null
          id?: string
          priority?: Database["public"]["Enums"]["goal_priority"] | null
          progress?: number | null
          title?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      health_metrics: {
        Row: {
          created_at: string
          id: string
          timestamp: string
          trend: Database["public"]["Enums"]["trend_type"] | null
          type: Database["public"]["Enums"]["health_metric_type"]
          unit: string
          user_id: string
          value: number
        }
        Insert: {
          created_at?: string
          id?: string
          timestamp?: string
          trend?: Database["public"]["Enums"]["trend_type"] | null
          type: Database["public"]["Enums"]["health_metric_type"]
          unit: string
          user_id: string
          value: number
        }
        Update: {
          created_at?: string
          id?: string
          timestamp?: string
          trend?: Database["public"]["Enums"]["trend_type"] | null
          type?: Database["public"]["Enums"]["health_metric_type"]
          unit?: string
          user_id?: string
          value?: number
        }
        Relationships: []
      }
      integrations: {
        Row: {
          config: Json | null
          connected: boolean | null
          created_at: string
          id: string
          last_sync: string | null
          name: string
          status: Database["public"]["Enums"]["integration_status"] | null
          type: Database["public"]["Enums"]["integration_type"]
          updated_at: string
          user_id: string
        }
        Insert: {
          config?: Json | null
          connected?: boolean | null
          created_at?: string
          id?: string
          last_sync?: string | null
          name: string
          status?: Database["public"]["Enums"]["integration_status"] | null
          type: Database["public"]["Enums"]["integration_type"]
          updated_at?: string
          user_id: string
        }
        Update: {
          config?: Json | null
          connected?: boolean | null
          created_at?: string
          id?: string
          last_sync?: string | null
          name?: string
          status?: Database["public"]["Enums"]["integration_status"] | null
          type?: Database["public"]["Enums"]["integration_type"]
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          ai_personality: Database["public"]["Enums"]["ai_personality"] | null
          avatar_url: string | null
          created_at: string
          health_tracking: boolean | null
          id: string
          name: string
          notifications: boolean | null
          subscription: Database["public"]["Enums"]["subscription_type"] | null
          theme: Database["public"]["Enums"]["user_theme"] | null
          updated_at: string
          user_id: string
        }
        Insert: {
          ai_personality?: Database["public"]["Enums"]["ai_personality"] | null
          avatar_url?: string | null
          created_at?: string
          health_tracking?: boolean | null
          id?: string
          name: string
          notifications?: boolean | null
          subscription?: Database["public"]["Enums"]["subscription_type"] | null
          theme?: Database["public"]["Enums"]["user_theme"] | null
          updated_at?: string
          user_id: string
        }
        Update: {
          ai_personality?: Database["public"]["Enums"]["ai_personality"] | null
          avatar_url?: string | null
          created_at?: string
          health_tracking?: boolean | null
          id?: string
          name?: string
          notifications?: boolean | null
          subscription?: Database["public"]["Enums"]["subscription_type"] | null
          theme?: Database["public"]["Enums"]["user_theme"] | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      ai_category: "health" | "productivity" | "creative" | "planning"
      ai_personality: "formal" | "casual" | "friendly"
      goal_category: "health" | "career" | "personal" | "financial"
      goal_priority: "low" | "medium" | "high"
      health_metric_type:
        | "heart_rate"
        | "sleep"
        | "steps"
        | "stress"
        | "temperature"
      integration_status: "active" | "error" | "pending"
      integration_type: "health" | "productivity" | "smart_home" | "social"
      subscription_type: "free" | "pro" | "elite"
      trend_type: "up" | "down" | "stable"
      user_theme: "light" | "dark" | "auto"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      ai_category: ["health", "productivity", "creative", "planning"],
      ai_personality: ["formal", "casual", "friendly"],
      goal_category: ["health", "career", "personal", "financial"],
      goal_priority: ["low", "medium", "high"],
      health_metric_type: [
        "heart_rate",
        "sleep",
        "steps",
        "stress",
        "temperature",
      ],
      integration_status: ["active", "error", "pending"],
      integration_type: ["health", "productivity", "smart_home", "social"],
      subscription_type: ["free", "pro", "elite"],
      trend_type: ["up", "down", "stable"],
      user_theme: ["light", "dark", "auto"],
    },
  },
} as const
