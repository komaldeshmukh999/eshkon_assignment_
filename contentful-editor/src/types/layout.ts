export type BlockType = 'hero' | 'twoColumn' | 'imageGrid';

export interface LayoutBlock {
  id: string;
  type: BlockType;
}
