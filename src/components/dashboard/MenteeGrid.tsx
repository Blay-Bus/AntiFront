import { Lightbulb } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Mentee {
  id: string;
  name: string;
  school: string;
  isActive?: boolean;
}

const mentees: Mentee[] = [
  { id: '1', name: '황규호', school: '경기고등학교 3학년', isActive: true },
  { id: '2', name: '황수연', school: '수원여자고등학교 2학년' },
  { id: '3', name: '나현우', school: '수원고등학교 2학년' },
  { id: '4', name: '김영애', school: '수원여자고등학교 1학년' },
  { id: '5', name: '배영빈', school: '경기고등학교 3학년' },
];

const MenteeCard = ({ mentee }: { mentee: Mentee }) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(`/mentee/${mentee.id}`)}
      className={`relative w-full aspect-[4/3] rounded-2xl border-2 transition-all duration-300 hover:scale-105 hover:shadow-lg ${
        mentee.isActive
          ? 'bg-accent border-accent'
          : 'bg-dark-card border-accent'
      }`}
    >
      {/* 폴더 탭 */}
      <div className="absolute -top-3 left-4 w-16 h-6 bg-dark-card rounded-t-xl border-2 border-b-0 border-accent flex items-center justify-center">
        <Lightbulb className="w-4 h-4 text-primary" />
      </div>

      {/* 카드 내용 */}
      <div className="absolute bottom-4 left-4 text-left">
        <h3 className={`text-xl font-bold ${mentee.isActive ? 'text-dark-card' : 'text-card-foreground'}`}>
          {mentee.name}
        </h3>
        <p className={`text-sm ${mentee.isActive ? 'text-dark-card/70' : 'text-muted-foreground'}`}>
          {mentee.school}
        </p>
      </div>
    </button>
  );
};

const MenteeGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 md:p-8">
      {mentees.map((mentee) => (
        <MenteeCard key={mentee.id} mentee={mentee} />
      ))}
    </div>
  );
};

export default MenteeGrid;
