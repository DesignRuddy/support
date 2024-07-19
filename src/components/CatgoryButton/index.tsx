import HelpsClass from '@/src/models/helps';
import React from 'react';

type CategoryButtonProps = {
    helps?: HelpsClass[];
};

const CategoryButton: React.FC<CategoryButtonProps> = ({ helps }) => {

    return (
        <div>
            {/* {helps.map((helps,index) => (
                <div key={index}>{helps.author}</div>
            ))} */}
            테스트 중입니다.
        </div>
    );
};

export default CategoryButton;