interface Page {
  page_index: number
}

export interface Design {
  thumbs: {
    low: string
  },
  pages: Page[],
  id: string,
  title: string
}
