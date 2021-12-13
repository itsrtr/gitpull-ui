import React from 'react';
import Table from 'terra-table';

const RepositoriesTable = ({ repositories }) => (
    <div>
        <Table isStriped={true}>
        <Table.Header>
            <Table.HeaderCell content="Repository Name" key="REPOSITORY" minWidth="small" />
        </Table.Header>
        {
            console.log('from RepositoriesTable'),
            console.log(repositories)
        }
        {/* {
          repositories.map(repo => (
              <Table.Row key={repo.name}>
                <Table.Cell content={repo.name} />
              </Table.Row>
            ))
        } */}
        <Table.Row key='1'>
            <Table.Cell content='Test value' />
        </Table.Row>
        </Table>            
    </div>
);

export default RepositoriesTable;