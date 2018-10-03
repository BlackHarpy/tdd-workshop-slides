export const moduleMockExample = `import KanbanService from "../../services/kanban.service";

jest.mock("../../services/kanban.service", () => ({
  getBoardLists: jest.fn(() => []),
  changeListName: jest.fn(() => []),
  addListToBoard: jest.fn(() => []),
  deleteList: jest.fn(() => []),
  changeListPosition: jest.fn(() => [])
}));`;
