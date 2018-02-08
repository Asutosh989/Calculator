import {grades} from './syllabus';

export function calculateGpa(subjects) {
    const total = subjects.reduce((sum, x) => sum+x.credits,0);
    const l = subjects.reduce((sum,x) => sum+x.credits*grades[x.grade],0);
    return (l/total);
} 