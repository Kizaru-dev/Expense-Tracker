import { createContext } from "react";

const ExpenseContext = createContext();

const initialState = {
  expenses: [],
  loading : false,
  error: null,
}