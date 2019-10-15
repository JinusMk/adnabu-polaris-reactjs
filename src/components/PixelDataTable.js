import React from 'react'
import { Page, Card, Select, Banner, DataTable  } from '@shopify/polaris'
export default function PixelDataTable(props){
    const rows = [
        ['Latest sale received on (any surce)', 'No data yet'],
        ['Latest sale received at Google Ads', '--'],
        ['Total save values (google ads) recorded in last 30 days', '--'],
        ['Passing sharges along with sale', 'No'],
      ];
      return (
        <div style={{borderBottom: '1px solid #DFE3E8'}}>
          <Card>
            <DataTable
              columnContentTypes={[
                'text',
                'numeric',
                'numeric',
                'numeric',
                'numeric',
              ]}
              headings={[]}
              rows={rows}
            />
          </Card>
          </div>
      );
}