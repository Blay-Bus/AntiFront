interface TodoItem {
  id: number;
  subject: string;
  task: string;
  completed: boolean;
}

const todoItems: TodoItem[] = [
  { id: 1, subject: '국어', task: '문법 강의', completed: true },
  { id: 2, subject: '영어', task: '모의고사', completed: true },
  { id: 3, subject: '영어', task: '단어 암기', completed: false },
  { id: 4, subject: '수학', task: '100제 한단원 끝내기', completed: false },
  { id: 5, subject: '수학', task: '오답 노트', completed: false },
];

const TodoList = () => {
  return (
    <div className="card-dark p-4 h-full">
      <h2 className="text-accent font-bold mb-4">TO DO LIST</h2>
      
      <div className="space-y-2">
        {todoItems.map((item) => (
          <div key={item.id} className="flex items-center gap-3">
            <div
              className={`w-3 h-3 rounded-full border-2 shrink-0 ${
                item.completed
                  ? 'bg-accent border-accent'
                  : 'border-muted-foreground'
              }`}
            />
            <span className="min-w-[60px] w-16 md:w-20 px-2 md:px-3 py-1 rounded-lg text-xs md:text-sm font-medium bg-secondary/20 text-secondary-foreground text-center shrink-0">
              {item.subject}
            </span>
            <span className="text-xs md:text-sm text-card-foreground truncate">{item.task}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
