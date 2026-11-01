export interface Table { head: string[]; rows: string[][] }
export interface Block {
  heading: string;
  text?: string;
  items?: string[];
  table?: Table;
}
export interface ModelGroup { group?: string; names: string[] }
export interface ContentPage {
  slug: string;
  title: string;        // H1
  short: string;        // card / menu label
  summary: string;      // card text + meta description
  intro: string;
  images?: { src: string; alt: string; caption?: string }[];
  tags?: string[];      // brands or product lines shown as chips
  models?: ModelGroup[];
  blocks?: Block[];
  turnaround?: string;
  note?: string;        // small print (e.g. local-only service)
  oldPaths?: string[];  // old .aspx URLs that redirect here
}
