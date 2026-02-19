export type StepStatus = "done" | "active" | "pending";
export type ProjectStatus = "selesai" | "proses" | "baru" | "review";

export interface Step {
  id: number;
  label: string;
  desc: string;
  date: string;
  status: StepStatus;
}

export interface Document {
  name: string;
  status: "received" | "pending" | "verified";
}

export interface Activity {
  time: string;
  text: string;
  type: "success" | "info" | "warning";
}

export interface Project {
  id: string;
  phone: string;
  clientName: string;
  company: string;
  service: string;
  serviceType: string;
  status: ProjectStatus;
  progress: number;
  startDate: string;
  estimatedFinish: string;
  consultant: string;
  consultantPhone: string;
  steps: Step[];
  documents: Document[];
  activities: Activity[];
}
