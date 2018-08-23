import React from "react";

import {
  Avatar,
  Card,
  DataTable,
  Page,
  List,
  ResourceList,
  FilterType,
  Select,
  TextField,
  TextStyle
} from "@shopify/polaris";
import { fetchAll } from "./services";

export default class ResourceListExample extends React.Component {
  state = {
    sortedRows: null
  };

  componentDidMount(){
    fetchAll();
  }

  sortCurrency = (rows, index, direction) => {
    return [...rows].sort((rowA, rowB) => {
      const amountA = parseFloat(rowA[index].substring(1));
      const amountB = parseFloat(rowB[index].substring(1));

      return direction === "descending" ? amountB - amountA : amountA - amountB;
    });
  };

  handleSort = rows => (index, direction) => {
    this.setState({ sortedRows: this.sortCurrency(rows, index, direction) });
  };
  state = {
    searchValue: "",
    appliedFilters: [
      {
        key: "accountStatusFilter",
        value: "Account enabled"
      }
    ]
  };

  handleSearchChange = searchValue => {
    this.setState({ searchValue });
  };

  handleFiltersChange = appliedFilters => {
    this.setState({ appliedFilters });
  };

  renderItem = item => {
    const { id, url, name, location } = item;
    const media = <Avatar customer size="medium" name={name} />;

    return (
      <ResourceList.Item id={id} url={url} media={media}>
        <h3>
          <TextStyle variation="strong">{name}</TextStyle>
        </h3>
        <div>{location}</div>
      </ResourceList.Item>
    );
  };

  render() {
    const resourceName = {
      singular: "customer",
      plural: "customers"
    };

    const { sortedRows } = this.state;

    const initiallySortedRows = [
      ["Emerald Silk Gown", 'Josué', '124689'],

      ["Mauve Cashmere Scarf", 'Yerlin', '124689'],
      [
        "Navy Merino Wool Blazer with khaki chinos and yellow belt",
        " Carlos",
        '124518'
      ],
      ["Emerald Silk Gown", 'Josué', '124689'],

      ["Mauve Cashmere Scarf", 'Yerlin', '124689'],
      [
        "Navy Merino Wool Blazer with khaki chinos and yellow belt",
        ' Carlos',
        '124518'
      ]
    ];
    const rows = sortedRows ? sortedRows : initiallySortedRows;

    const items = [
      {
        url: "customers/341",
        name: "Mae Jemison",
        location: "Decatur, USA"
      }
    ];

    //const rows = sortedRows ? sortedRows : initiallySortedRows;

    const filters = [
      {
        key: "orderCountFilter",
        label: "Number of orders",
        operatorText: "is greater than",
        type: FilterType.TextField
      },
      {
        key: "accountStatusFilter",
        label: "Account status",
        operatorText: "is",
        type: FilterType.Select,
        options: ["Enabled", "Invited", "Not invited", "Declined"]
      }
    ];

    const filterControl = (
      <ResourceList.FilterControl
        filters={filters}
        appliedFilters={this.state.appliedFilters}
        onFiltersChange={this.handleFiltersChange}
        searchValue={this.state.searchValue}
        onSearchChange={this.handleSearchChange}
        additionalAction={{
          content: "Save",
          onAction: () => console.log("New filter saved")
        }}
      />
    );

    return (
      
      <Card>
        <Page title="Sales by product">
        <ResourceList
          resourceName={resourceName}
          items={items}
          renderItem={this.renderItem}
          filterControl={filterControl}
        />

        
          <Card>
            <DataTable
              columnContentTypes={["text", "text", "numeric"]}
              headings={["Event", "Name", "N Ticket"]}
              rows={rows}
              sortable={[false, true, true]}
              defaultSortDirection="descending"
              initialSortColumnIndex={3}
              onSort={this.handleSort(rows)}
            />
          </Card>
        </Page>
      </Card>
    );
  }
}
