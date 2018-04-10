import React from "react"
import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "material-ui/Table"
// import ListSubheader from "material-ui/List/ListSubheader"
// import Typography from "material-ui/Typography"
// import { cyan, white } from "material-ui/colors"
import styled from "styled-components"
import data from "common/data/data"

// const SubheaderContainer = styled(ListSubheader)`
//     && {
//         font-size: 24,
//       /* font-weight: Typography.fontWeightLight; */
//       background-color: cyan[600];
//       color: white;
//     }
// `
const DescriptorColumn = styled(TableCell)`
  && {
    width: 20%;
  }
`
const NamesColumn = styled(TableCell)`
  && {
    width: 40%;
  }
`
const SystemicColumn = styled(TableCell)`
  && {
    width: 20%;
  }
`
const IdColumn = styled(TableCell)`
  && {
    width: 20%;
  }
`

const LatestGenes = props => {
  return (
    <div>
      {/* <ListSubheader>{props.subheader}</ListSubheader> */}
      <Table>
        <TableHead>
          <TableRow>
            <DescriptorColumn>Strain Descriptor</DescriptorColumn>
            <NamesColumn>Strain Names</NamesColumn>
            <SystemicColumn>Systematic Name</SystemicColumn>
            <IdColumn>Strain ID</IdColumn>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.tables.latestGenes.map(item => (
            <TableRow key={item.id}>
              <DescriptorColumn>{item.descriptor}</DescriptorColumn>
              <NamesColumn>{item.names}</NamesColumn>
              <SystemicColumn>{item.systemic}</SystemicColumn>
              <IdColumn>{item.id}</IdColumn>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default LatestGenes
