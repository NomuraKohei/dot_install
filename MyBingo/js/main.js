'use strict';

{

    const createColumn = (col) => {
        const source = [];
        source.length = 15;
        for(let i = 0; i < source.length; i++){
            source[i] = i + 1 + source.length * col;
        }
    
        const column = [];
        for (let i = 0; i < 5; i++) {
            column[i] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
        }
        
        return column;
    }

    // 配列の作成
    const createColumns = () => {
        const columns = [];

        for (let i = 0; i < 5; i++) {
            columns[i] = createColumn(i);
        }
        columns[2][2] = 'FREE';
        console.log(columns)
        return columns;
    }

    const renderBingo = (columns) => {
        for(let row = 0; row < 5; row ++) {
            const tr = document.createElement('tr');
            for(let col = 0; col < 5; col++){
                const td = document.createElement('td');
                td.textContent = columns[col][row];
                tr.appendChild(td);
            }
            document.querySelector('tbody').appendChild(tr);
        }
    }

    const columns = createColumns();
    renderBingo(columns);

}