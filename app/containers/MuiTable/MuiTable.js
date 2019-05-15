import React from 'react';
import Grid from '@material-ui/core/Grid';
import MUIDataTable from 'mui-datatables';
import tableData from './tableData.json';

// eslint-disable-next-line react/prefer-stateless-function
class MuiTable extends React.Component {
  render() {
    // const columns = ['Post Id', 'Id', 'Name', 'Email', 'Body'];
    const columns = [
      {
        name: 'Post Id',
        options: {
          selectableRows: true,
          sort: false
        }
      },
      {
        name: 'Id',
        options: {
          filter: true,
          sort: false
        }
      },
      {
        name: 'Name',
        options: {
          search: true,
          selectableRows: true
        }
      },
      {
        name: 'Email'
      },
      {
        name: 'Body'
      },
      {
        name: 'Actions',
        options: {
          sort: false
        }
      }
    ];
    const options = {
      filterType: 'dropdown',
      responsive: 'scroll',
      hasIndex: true,
      download: false,
      print: false,
      rowsPerPage: 5,
      rowHover: true,
      search: true
    };
    return (
      <div className="container">
        <Grid container spacing={24}>
          <Grid item lg={12}>
            <MUIDataTable
              title={'Products list'}
              columns={columns}
              options={options}
              data={tableData.map((item) => [
                item.postId,
                item.id,
                item.name,
                item.email,
                item.body
              ])}
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default MuiTable;
