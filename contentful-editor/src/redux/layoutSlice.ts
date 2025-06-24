import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Block {
  id: string;
  type: 'hero' | 'twoColumn' | 'imageGrid';
}

interface LayoutState {
  blocks: Block[];
}

const initialState: LayoutState = {
  blocks: [],
};

const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    addBlock: (state, action: PayloadAction<Block>) => {
      state.blocks.push(action.payload);
    },
    moveBlock: (state, action: PayloadAction<{ from: number; to: number }>) => {
      const [moved] = state.blocks.splice(action.payload.from, 1);
      state.blocks.splice(action.payload.to, 0, moved);
    },
    removeBlock: (state, action: PayloadAction<string>) => {
      state.blocks = state.blocks.filter((b) => b.id !== action.payload);
    },
    setBlocks: (state, action: PayloadAction<Block[]>) => {
      state.blocks = action.payload;
    },
  },
});

export const { addBlock, moveBlock, removeBlock, setBlocks } = layoutSlice.actions;
export default layoutSlice.reducer;
