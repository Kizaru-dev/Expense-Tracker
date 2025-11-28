export const formatCurrency = (amount) => {
  return new Intl.NumberFormat("en-US", {
    style : "currency",
    currency : "INR",
    maximumFractionDigits: 2,
  }).format(amount)
};


export const formateDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US",{
    year : "numeric",
    month : "short",
    day : "numeric",
  });
}

export const getTotalExpense = (expenses) => {
  const categories = {
    food : 0 ,
    transport : 0 ,
    entertainment : 0 ,
    utilities: 0,
    other : 0,
    Shopping : 0,
    health : 0,
  };
  expenses.forEach(element => {
    categories[expenses.category] 
  });
}