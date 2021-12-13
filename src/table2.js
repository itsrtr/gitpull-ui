
const Table = ({ repositories }) => (
    <div>
        <table>
            <th>Repository name</th>
            {
                repositories.map(repo => (
                    <tr>
                        <td>{repo.name}</td>
                    </tr>
                ))
            }
        </table>
    </div>
);

export default Table;