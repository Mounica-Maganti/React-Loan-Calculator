import React, { Fragment } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import * as _ from 'lodash';
import { LoanSummaryLocale } from '../../locale/index';
import LoanSummaryDetails from '../LoanSummaryDetails/LoanSummaryDetails';


const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const LoanCalculatorSummary = ({ loanInfo, summaryData }) => {
  const classes = useStyles();

  return (
    <Fragment>
      <LoanSummaryDetails {...summaryData} />
      <TableContainer component={Paper} className="loan-summary-container">
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              {
                _.get(LoanSummaryLocale, 'tableColumns', []).map((column, index) => (
                  <StyledTableCell
                    key={index}
                    align={"center"}
                    id={`${column}ColumnHeader`}
                  > {column}</StyledTableCell>
                ))
              }
            </TableRow>
          </TableHead>
          <TableBody>
            {loanInfo.map((row) => (
              <StyledTableRow key={row.monthCount} id="tableBody">
                <StyledTableCell align="center" component="th" scope="row">
                  {row.monthCount}
                </StyledTableCell>
                <StyledTableCell align="center">{row.balance}</StyledTableCell>
                <StyledTableCell align="center">{row.interest}</StyledTableCell>
                <StyledTableCell align="center">{row.principal}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Fragment>
  );
}

LoanCalculatorSummary.propTypes = {
  loanInfo: PropTypes.array.isRequired,
  summaryData: PropTypes.object.isRequired,
};

LoanCalculatorSummary.defaultProps = {
  loanInfo: [],
  summaryData: {}
};

export default LoanCalculatorSummary;