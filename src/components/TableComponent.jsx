import React from "react";
import {
  Link,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

const TableComponent = (props) => {
  const navigate = useNavigate()
  const { values } = props;
  const { ListTitle, state, listname } = values;

  const detail=()=>{
    navigate('/detail')
  }

  return (
    <>
      <Table aria-label="Example static collection table">
        <TableHeader>
          {ListTitle?.map((valTitle, idx) => (
            <TableColumn key={idx}>{valTitle}</TableColumn>
          ))}
        </TableHeader>

        <TableBody>
          {state?.map((valState, idx) => {
            return (
              <TableRow key={idx} onClick={detail} className="" style={{cursor:'pointer'}}>
                {listname?.map((valListname, idx) => {
                  return (
                    <TableCell>
                      {valState["customer"][valListname]}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
};
export default TableComponent;
