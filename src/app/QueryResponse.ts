export interface QueryResponse {
  docs: Array<any>,
  totalDocs: number,
  limit: number | null,
  totalPages: number,
  page: number,
  pagingCounter: number,
  hasPrevPage: boolean,
  hasNextPage: boolean,
  prevPage: number | null,
  nextPage: number | null
}