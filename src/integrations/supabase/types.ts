export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      announcements: {
        Row: {
          content: string
          created_at: string | null
          created_by: string | null
          expires_at: string | null
          id: string
          priority: string | null
          published_at: string | null
          target_audience: string | null
          title: string
          type: string | null
        }
        Insert: {
          content: string
          created_at?: string | null
          created_by?: string | null
          expires_at?: string | null
          id?: string
          priority?: string | null
          published_at?: string | null
          target_audience?: string | null
          title: string
          type?: string | null
        }
        Update: {
          content?: string
          created_at?: string | null
          created_by?: string | null
          expires_at?: string | null
          id?: string
          priority?: string | null
          published_at?: string | null
          target_audience?: string | null
          title?: string
          type?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "announcements_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      badges: {
        Row: {
          created_at: string | null
          criteria: Json | null
          description: string | null
          icon: string | null
          id: string
          name: string
          xp_reward: number | null
        }
        Insert: {
          created_at?: string | null
          criteria?: Json | null
          description?: string | null
          icon?: string | null
          id?: string
          name: string
          xp_reward?: number | null
        }
        Update: {
          created_at?: string | null
          criteria?: Json | null
          description?: string | null
          icon?: string | null
          id?: string
          name?: string
          xp_reward?: number | null
        }
        Relationships: []
      }
      contest_registrations: {
        Row: {
          contest_id: string | null
          id: string
          registered_at: string | null
          user_id: string | null
        }
        Insert: {
          contest_id?: string | null
          id?: string
          registered_at?: string | null
          user_id?: string | null
        }
        Update: {
          contest_id?: string | null
          id?: string
          registered_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "contest_registrations_contest_id_fkey"
            columns: ["contest_id"]
            isOneToOne: false
            referencedRelation: "contests"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "contest_registrations_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      contests: {
        Row: {
          created_at: string | null
          created_by: string | null
          description: string | null
          duration: number | null
          end_time: string
          id: string
          max_participants: number | null
          problem_ids: string[] | null
          registration_end: string | null
          registration_start: string | null
          scoring_rules: Json | null
          slug: string
          start_time: string
          status: string | null
          title: string
          type: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          duration?: number | null
          end_time: string
          id?: string
          max_participants?: number | null
          problem_ids?: string[] | null
          registration_end?: string | null
          registration_start?: string | null
          scoring_rules?: Json | null
          slug: string
          start_time: string
          status?: string | null
          title: string
          type?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          duration?: number | null
          end_time?: string
          id?: string
          max_participants?: number | null
          problem_ids?: string[] | null
          registration_end?: string | null
          registration_start?: string | null
          scoring_rules?: Json | null
          slug?: string
          start_time?: string
          status?: string | null
          title?: string
          type?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "contests_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      lesson_completions: {
        Row: {
          completed_at: string | null
          id: string
          lesson_id: string | null
          quiz_score: number | null
          time_spent: number | null
          user_id: string | null
        }
        Insert: {
          completed_at?: string | null
          id?: string
          lesson_id?: string | null
          quiz_score?: number | null
          time_spent?: number | null
          user_id?: string | null
        }
        Update: {
          completed_at?: string | null
          id?: string
          lesson_id?: string | null
          quiz_score?: number | null
          time_spent?: number | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "lesson_completions_lesson_id_fkey"
            columns: ["lesson_id"]
            isOneToOne: false
            referencedRelation: "lessons"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "lesson_completions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      lessons: {
        Row: {
          author_id: string | null
          completions_count: number | null
          content: string | null
          created_at: string | null
          description: string | null
          difficulty: string | null
          id: string
          quiz_data: Json | null
          slug: string
          status: string | null
          tags: string[] | null
          time_estimate: number | null
          title: string
          track: string
          updated_at: string | null
          video_url: string | null
        }
        Insert: {
          author_id?: string | null
          completions_count?: number | null
          content?: string | null
          created_at?: string | null
          description?: string | null
          difficulty?: string | null
          id?: string
          quiz_data?: Json | null
          slug: string
          status?: string | null
          tags?: string[] | null
          time_estimate?: number | null
          title: string
          track: string
          updated_at?: string | null
          video_url?: string | null
        }
        Update: {
          author_id?: string | null
          completions_count?: number | null
          content?: string | null
          created_at?: string | null
          description?: string | null
          difficulty?: string | null
          id?: string
          quiz_data?: Json | null
          slug?: string
          status?: string | null
          tags?: string[] | null
          time_estimate?: number | null
          title?: string
          track?: string
          updated_at?: string | null
          video_url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "lessons_author_id_fkey"
            columns: ["author_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      problems: {
        Row: {
          constraints: string | null
          created_at: string | null
          description: string
          difficulty: string
          examples: Json | null
          id: string
          slug: string
          solve_count: number | null
          source: string | null
          source_url: string | null
          starter_code: Json | null
          status: string | null
          tags: string[] | null
          test_cases: Json | null
          title: string
          updated_at: string | null
        }
        Insert: {
          constraints?: string | null
          created_at?: string | null
          description: string
          difficulty: string
          examples?: Json | null
          id?: string
          slug: string
          solve_count?: number | null
          source?: string | null
          source_url?: string | null
          starter_code?: Json | null
          status?: string | null
          tags?: string[] | null
          test_cases?: Json | null
          title: string
          updated_at?: string | null
        }
        Update: {
          constraints?: string | null
          created_at?: string | null
          description?: string
          difficulty?: string
          examples?: Json | null
          id?: string
          slug?: string
          solve_count?: number | null
          source?: string | null
          source_url?: string | null
          starter_code?: Json | null
          status?: string | null
          tags?: string[] | null
          test_cases?: Json | null
          title?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          badges_count: number | null
          created_at: string | null
          department: string | null
          email: string | null
          full_name: string | null
          id: string
          role: string | null
          status: string | null
          updated_at: string | null
          username: string | null
          xp: number | null
          year: string | null
        }
        Insert: {
          avatar_url?: string | null
          badges_count?: number | null
          created_at?: string | null
          department?: string | null
          email?: string | null
          full_name?: string | null
          id: string
          role?: string | null
          status?: string | null
          updated_at?: string | null
          username?: string | null
          xp?: number | null
          year?: string | null
        }
        Update: {
          avatar_url?: string | null
          badges_count?: number | null
          created_at?: string | null
          department?: string | null
          email?: string | null
          full_name?: string | null
          id?: string
          role?: string | null
          status?: string | null
          updated_at?: string | null
          username?: string | null
          xp?: number | null
          year?: string | null
        }
        Relationships: []
      }
      study_group_members: {
        Row: {
          group_id: string | null
          id: string
          joined_at: string | null
          role: string | null
          user_id: string | null
        }
        Insert: {
          group_id?: string | null
          id?: string
          joined_at?: string | null
          role?: string | null
          user_id?: string | null
        }
        Update: {
          group_id?: string | null
          id?: string
          joined_at?: string | null
          role?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "study_group_members_group_id_fkey"
            columns: ["group_id"]
            isOneToOne: false
            referencedRelation: "study_groups"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "study_group_members_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      study_groups: {
        Row: {
          created_at: string | null
          created_by: string | null
          description: string | null
          id: string
          is_private: boolean | null
          max_members: number | null
          name: string
          topic: string | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          id?: string
          is_private?: boolean | null
          max_members?: number | null
          name: string
          topic?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          id?: string
          is_private?: boolean | null
          max_members?: number | null
          name?: string
          topic?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "study_groups_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      submissions: {
        Row: {
          code: string
          contest_id: string | null
          execution_time: number | null
          id: string
          language: string
          memory_used: number | null
          problem_id: string | null
          score: number | null
          status: string | null
          submitted_at: string | null
          test_results: Json | null
          user_id: string | null
        }
        Insert: {
          code: string
          contest_id?: string | null
          execution_time?: number | null
          id?: string
          language: string
          memory_used?: number | null
          problem_id?: string | null
          score?: number | null
          status?: string | null
          submitted_at?: string | null
          test_results?: Json | null
          user_id?: string | null
        }
        Update: {
          code?: string
          contest_id?: string | null
          execution_time?: number | null
          id?: string
          language?: string
          memory_used?: number | null
          problem_id?: string | null
          score?: number | null
          status?: string | null
          submitted_at?: string | null
          test_results?: Json | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "submissions_contest_id_fkey"
            columns: ["contest_id"]
            isOneToOne: false
            referencedRelation: "contests"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "submissions_problem_id_fkey"
            columns: ["problem_id"]
            isOneToOne: false
            referencedRelation: "problems"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "submissions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      user_badges: {
        Row: {
          badge_id: string | null
          earned_at: string | null
          id: string
          user_id: string | null
        }
        Insert: {
          badge_id?: string | null
          earned_at?: string | null
          id?: string
          user_id?: string | null
        }
        Update: {
          badge_id?: string | null
          earned_at?: string | null
          id?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "user_badges_badge_id_fkey"
            columns: ["badge_id"]
            isOneToOne: false
            referencedRelation: "badges"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_badges_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
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
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
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
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
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
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
