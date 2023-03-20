<script>
    import { fade } from 'svelte/transition'
</script>
<style>
table {
    max-width: none;
    width: 100%;
    min-width:900px;
}
td,
th {
  margin: 0;
  white-space: nowrap;
}

.headcol {
  @apply sticky w-auto left-0 top-auto text-left pl-4 pr-8 py-3 bg-grey;
  /*only relevant for first row*/
}
.long {
  @apply p-2 text-center;
}
.cashflow_statement_wrapper {
    background-color: rgba(255, 255, 255, 0.85);
    @apply w-full h-auto p-10;
    border: 1px solid #e0e0e0;
    box-shadow: 0 3px 6px 1px rgba(0,0,0,0.16);
}
.cashflow_statement {
    @apply relative;
    overflow-x: scroll;
    overflow-y: visible;
}
h1 {
    @apply uppercase text-center text-xl mb-8;
}
.empty_row {
    @apply w-[webkit-fill-available] bg-grey;
}
.empty_row .headcol {
    @apply bg-grey;
}
.empty_row .long {
    @apply py-0;
}
.empty_cell {
    @apply p-0;
}
.month {
    @apply text-center;
}
.year {
    @apply text-center pb-0;
}

</style>

<div class="cashflow_statement_wrapper" in:fade>
    <h1>Cash Flow Statement</h1>
    <div class="cashflow_statement">
        <table>
            <tr class="empty_row">
                <th class="headcol"></th>
                <td colspan="24" class="year">2023</td>
                <td colspan="24" class="year">2024</td>
            </tr>
            <tr class="empty_row" >
                <th class="headcol"></th>
                <td colspan="2" class="long">JAN</td>
                <td colspan="2" class="long">FEB</td>
                <td colspan="2" class="long">MAR</td>
                <td colspan="2" class="long">APR</td>
                <td colspan="2" class="long">MAY</td>
                <td colspan="2" class="long">JUN</td>
                <td colspan="2" class="long">JUL</td>
                <td colspan="2" class="long">AUG</td>
                <td colspan="2" class="long">SEP</td>
                <td colspan="2" class="long">OCT</td>
                <td colspan="2" class="long">NOV</td>
                <td colspan="2" class="long">DEC</td>
                <td colspan="2" class="long">JAN</td>
                <td colspan="2" class="long">FEB</td>
                <td colspan="2" class="long">MAR</td>
                <td colspan="2" class="long">APR</td>
                <td colspan="2" class="long">MAY</td>
                <td colspan="2" class="long">JUN</td>
                <td colspan="2" class="long">JUL</td>
                <td colspan="2" class="long">AUG</td>
                <td colspan="2" class="long">SEP</td>
                <td colspan="2" class="long">OCT</td>
                <td colspan="2" class="long">NOV</td>
                <td colspan="2" class="long">DEC</td>
            </tr>
            <tr class="empty_row">
                <th class="headcol"></th>
                <td class="long">T</td>
                <td class="long">A</td>
                <td class="long">T</td>
                <td class="long">A</td>
                <td class="long">T</td>
                <td class="long">A</td>
                <td class="long">T</td>
                <td class="long">A</td>
                <td class="long">T</td>
                <td class="long">A</td>
                <td class="long">T</td>
                <td class="long">A</td>
                <td class="long">T</td>
                <td class="long">A</td>
                <td class="long">T</td>
                <td class="long">A</td>
                <td class="long">T</td>
                <td class="long">A</td>
                <td class="long">T</td>
                <td class="long">A</td>
                <td class="long">T</td>
                <td class="long">A</td>
                <td class="long">T</td>
                <td class="long">A</td>
                <td class="long">T</td>
                <td class="long">A</td>
                <td class="long">T</td>
                <td class="long">A</td>
                <td class="long">T</td>
                <td class="long">A</td>
                <td class="long">T</td>
                <td class="long">A</td>
                <td class="long">T</td>
                <td class="long">A</td>
                <td class="long">T</td>
                <td class="long">A</td>
                <td class="long">T</td>
                <td class="long">A</td>
                <td class="long">T</td>
                <td class="long">A</td>
                <td class="long">T</td>
                <td class="long">A</td>
                <td class="long">T</td>
                <td class="long">A</td>
                <td class="long">T</td>
                <td class="long">A</td>
                <td class="long">T</td>
                <td class="long">A</td>
            </tr>
            <tr class="empty_row" >
                <th class="headcol">Income</th>
                <td colspan="48" class="empty_cell"></td>
            </tr>

            <tr>
                <th class="headcol">Rental Income</th>
                <td class="long">-</td>
                <td class="long">-</td>
                <td class="long">-</td>
                <td class="long">-</td>
                <td class="long">-</td>
                <td class="long">-</td>
                <td class="long">1200</td>
                <td class="long">-</td>
                <td class="long">1200</td>
                <td class="long">-</td>
                <td class="long">1200</td>
                <td class="long">-</td>
                <td class="long">1200</td>
                <td class="long">-</td>
                <td class="long">1200</td>
                <td class="long">-</td>
                <td class="long">1200</td>
                <td class="long">-</td>
                <td class="long">1200</td>
                <td class="long">-</td>
                <td class="long">1200</td>
                <td class="long">-</td>
                <td class="long">1200</td>
                <td class="long">-</td>
                <td class="long">1200</td>
                <td class="long">-</td>
                <td class="long">1200</td>
                <td class="long">-</td>
                <td class="long">1200</td>
                <td class="long">-</td>
                <td class="long">1200</td>
                <td class="long">-</td>
                <td class="long">1200</td>
                <td class="long">-</td>
                <td class="long">1200</td>
                <td class="long">-</td>
                <td class="long">1200</td>
                <td class="long">-</td>
                <td class="long">1200</td>
                <td class="long">-</td>
                <td class="long">1200</td>
                <td class="long">-</td>
                <td class="long">1200</td>
                <td class="long">-</td>
                <td class="long">1200</td>
                <td class="long">-</td>
                <td class="long">1200</td>
                <td class="long">-</td>
            </tr>
             <tr>
                <th class="headcol">Other Income</th>
                <td class="long">-</td>
                <td class="long">-</td>
                <td class="long">-</td>
                <td class="long">-</td>
                <td class="long">-</td>
                <td class="long">-</td>
                <td class="long">0</td>
                <td class="long">-</td>
                <td class="long">0</td>
                <td class="long">-</td>
                <td class="long">0</td>
                <td class="long">-</td>
                <td class="long">0</td>
                <td class="long">-</td>
                <td class="long">0</td>
                <td class="long">-</td>
                <td class="long">0</td>
                <td class="long">-</td>
                <td class="long">0</td>
                <td class="long">-</td>
                <td class="long">0</td>
                <td class="long">-</td>
                <td class="long">0</td>
                <td class="long">-</td>
                <td class="long">0</td>
                <td class="long">-</td>
                <td class="long">0</td>
                <td class="long">-</td>
                <td class="long">0</td>
                <td class="long">-</td>
                <td class="long">0</td>
                <td class="long">-</td>
                <td class="long">0</td>
                <td class="long">-</td>
                <td class="long">0</td>
                <td class="long">-</td>
                <td class="long">0</td>
                <td class="long">-</td>
                <td class="long">0</td>
                <td class="long">-</td>
                <td class="long">0</td>
                <td class="long">-</td>
                <td class="long">0</td>
                <td class="long">-</td>
                <td class="long">0</td>
                <td class="long">-</td>
                <td class="long">0</td>
                <td class="long">-</td>
            </tr>
            <tr>
                <th class="headcol">Total Income</th>
                <td class="long">-</td>
                <td class="long">-</td>
                <td class="long">-</td>
                <td class="long">-</td>
                <td class="long">-</td>
                <td class="long">-</td>
                <td class="long">1200</td>
                <td class="long">-</td>
                <td class="long">1200</td>
                <td class="long">-</td>
                <td class="long">1200</td>
                <td class="long">-</td>
                <td class="long">1200</td>
                <td class="long">-</td>
                <td class="long">1200</td>
                <td class="long">-</td>
                <td class="long">1200</td>
                <td class="long">-</td>
                <td class="long">1200</td>
                <td class="long">-</td>
                <td class="long">1200</td>
                <td class="long">-</td>
                <td class="long">1200</td>
                <td class="long">-</td>
                <td class="long">1200</td>
                <td class="long">-</td>
                <td class="long">1200</td>
                <td class="long">-</td>
                <td class="long">1200</td>
                <td class="long">-</td>
                <td class="long">1200</td>
                <td class="long">-</td>
                <td class="long">1200</td>
                <td class="long">-</td>
                <td class="long">1200</td>
                <td class="long">-</td>
                <td class="long">1200</td>
                <td class="long">-</td>
                <td class="long">1200</td>
                <td class="long">-</td>
                <td class="long">1200</td>
                <td class="long">-</td>
                <td class="long">1200</td>
                <td class="long">-</td>
                <td class="long">1200</td>
                <td class="long">-</td>
                <td class="long">1200</td>
                <td class="long">-</td>
            </tr>
            <tr class="empty_row" >
                <th class="headcol">Expenses</th>
                <td class="long" colspan="48"><td>
            </tr>
            <tr>
                <th class="headcol">Direct Costs</th>
                <td class="long">-</td>
                <td class="long">-</td>
                <td class="long">-</td>
                <td class="long">-</td>
                <td class="long">-</td>
                <td class="long">-</td>
                <td class="long">0</td>
                <td class="long">-</td>
                <td class="long">0</td>
                <td class="long">-</td>
                <td class="long">200</td>
                <td class="long">-</td>
                <td class="long">0</td>
                <td class="long">-</td>
                <td class="long">0</td>
                <td class="long">-</td>
                <td class="long">200</td>
                <td class="long">-</td>
                <td class="long">0</td>
                <td class="long">-</td>
                <td class="long">0</td>
                <td class="long">-</td>
                <td class="long">200</td>
                <td class="long">-</td>
                <td class="long">0</td>
                <td class="long">-</td>
                <td class="long">0</td>
                <td class="long">-</td>
                <td class="long">200</td>
                <td class="long">-</td>
                <td class="long">0</td>
                <td class="long">-</td>
                <td class="long">0</td>
                <td class="long">-</td>
                <td class="long">200</td>
                <td class="long">-</td>
                <td class="long">0</td>
                <td class="long">-</td>
                <td class="long">0</td>
                <td class="long">-</td>
                <td class="long">200</td>
                <td class="long">-</td>
                <td class="long">0</td>
                <td class="long">-</td>
                <td class="long">0</td>
                <td class="long">-</td>
                <td class="long">200</td>
                <td class="long">-</td>
            </tr>
            <tr>
                <th class="headcol">Indirect Costs</th>
                <td class="long">-</td>
                <td class="long">-</td>
                <td class="long">-</td>
                <td class="long">-</td>
                <td class="long">-</td>
                <td class="long">-</td>
                <td class="long">0</td>
                <td class="long">-</td>
                <td class="long">0</td>
                <td class="long">-</td>
                <td class="long">0</td>
                <td class="long">-</td>
                <td class="long">0</td>
                <td class="long">-</td>
                <td class="long">0</td>
                <td class="long">-</td>
                <td class="long">0</td>
                <td class="long">-</td>
                <td class="long">0</td>
                <td class="long">-</td>
                <td class="long">0</td>
                <td class="long">-</td>
                <td class="long">0</td>
                <td class="long">-</td>
                <td class="long">0</td>
                <td class="long">-</td>
                <td class="long">0</td>
                <td class="long">-</td>
                <td class="long">0</td>
                <td class="long">-</td>
                <td class="long">0</td>
                <td class="long">-</td>
                <td class="long">0</td>
                <td class="long">-</td>
                <td class="long">0</td>
                <td class="long">-</td>
                <td class="long">0</td>
                <td class="long">-</td>
                <td class="long">0</td>
                <td class="long">-</td>
                <td class="long">0</td>
                <td class="long">-</td>
                <td class="long">0</td>
                <td class="long">-</td>
                <td class="long">0</td>
                <td class="long">-</td>
                <td class="long">0</td>
                <td class="long">-</td>
            </tr>
            <tr>
                <th class="headcol">Total Expenses</th>
                <td class="long">-</td>
                <td class="long">-</td>
                <td class="long">-</td>
                <td class="long">-</td>
                <td class="long">-</td>
                <td class="long">-</td>
                <td class="long">0</td>
                <td class="long">-</td>
                <td class="long">0</td>
                <td class="long">-</td>
                <td class="long">200</td>
                <td class="long">-</td>
                <td class="long">0</td>
                <td class="long">-</td>
                <td class="long">0</td>
                <td class="long">-</td>
                <td class="long">200</td>
                <td class="long">-</td>
                <td class="long">0</td>
                <td class="long">-</td>
                <td class="long">0</td>
                <td class="long">-</td>
                <td class="long">200</td>
                <td class="long">-</td>
                <td class="long">0</td>
                <td class="long">-</td>
                <td class="long">0</td>
                <td class="long">-</td>
                <td class="long">200</td>
                <td class="long">-</td>
                <td class="long">0</td>
                <td class="long">-</td>
                <td class="long">0</td>
                <td class="long">-</td>
                <td class="long">200</td>
                <td class="long">-</td>
                <td class="long">0</td>
                <td class="long">-</td>
                <td class="long">0</td>
                <td class="long">-</td>
                <td class="long">200</td>
                <td class="long">-</td>
                <td class="long">0</td>
                <td class="long">-</td>
                <td class="long">0</td>
                <td class="long">-</td>
                <td class="long">200</td>
                <td class="long">-</td>
            </tr>
            <tr>
                <th class="headcol">Net Cash Flow</th>
                <td class="long">-</td>
                <td class="long">-</td>
                <td class="long">-</td>
                <td class="long">-</td>
                <td class="long">-</td>
                <td class="long">-</td>
                <td class="long">1200</td>
                <td class="long">-</td>
                <td class="long">1200</td>
                <td class="long">-</td>
                <td class="long">1000</td>
                <td class="long">-</td>
                <td class="long">1200</td>
                <td class="long">-</td>
                <td class="long">1200</td>
                <td class="long">-</td>
                <td class="long">1000</td>
                <td class="long">-</td>
                <td class="long">1200</td>
                <td class="long">-</td>
                <td class="long">1200</td>
                <td class="long">-</td>
                <td class="long">1000</td>
                <td class="long">-</td>
                <td class="long">1200</td>
                <td class="long">-</td>
                <td class="long">1200</td>
                <td class="long">-</td>
                <td class="long">1000</td>
                <td class="long">-</td>
                <td class="long">1200</td>
                <td class="long">-</td>
                <td class="long">1200</td>
                <td class="long">-</td>
                <td class="long">1000</td>
                <td class="long">-</td>
                <td class="long">1200</td>
                <td class="long">-</td>
                <td class="long">1200</td>
                <td class="long">-</td>
                <td class="long">1000</td>
                <td class="long">-</td>
                <td class="long">1200</td>
                <td class="long">-</td>
                <td class="long">1200</td>
                <td class="long">-</td>
                <td class="long">1000</td>
                <td class="long">-</td>
            </tr>
            <tr>
                <th class="headcol">Beginning Cash Balance</th>
                <td class="long">-</td>
                <td class="long">-</td>
                <td class="long">-</td>
                <td class="long">-</td>
                <td class="long">-</td>
                <td class="long">-</td>
                <td class="long">8000</td>
                <td class="long">-</td>
                <td class="long">9200</td>
                <td class="long">-</td>
                <td class="long">10400</td>
                <td class="long">-</td>
                <td class="long">11400</td>
                <td class="long">-</td>
                <td class="long">12600</td>
                <td class="long">-</td>
                <td class="long">13800</td>
                <td class="long">-</td>
                <td class="long">14800</td>
                <td class="long">-</td>
                <td class="long">16000</td>
                <td class="long">-</td>
                <td class="long">17200</td>
                <td class="long">-</td>
                <td class="long">18200</td>
                <td class="long">-</td>
                <td class="long">19400</td>
                <td class="long">-</td>
                <td class="long">20600</td>
                <td class="long">-</td>
                <td class="long">21600</td>
                <td class="long">-</td>
                <td class="long">22800</td>
                <td class="long">-</td>
                <td class="long">8500</td>
                <td class="long">-</td>
                <td class="long">-</td>
                <td class="long">-</td>
                <td class="long">-</td>
                <td class="long">-</td>
                <td class="long">-</td>
                <td class="long">-</td>
                <td class="long">-</td>
                <td class="long">-</td>
                <td class="long">-</td>
                <td class="long">-</td>
                <td class="long">-</td>
                <td class="long">-</td>
            </tr>
            <tr>
                <th class="headcol">Ending Cash Balance</th>
                <td class="long">-</td>
                <td class="long">-</td>
                <td class="long">-</td>
                <td class="long">-</td>
                <td class="long">-</td>
                <td class="long">-</td>
                <td class="long">9200</td>
                <td class="long">-</td>
                <td class="long">10400</td>
                <td class="long">-</td>
                <td class="long">11400</td>
                <td class="long">-</td>
                <td class="long">12600</td>
                <td class="long">-</td>
                <td class="long">13800</td>
                <td class="long">-</td>
                <td class="long">14800</td>
                <td class="long">-</td>
                <td class="long">16000</td>
                <td class="long">-</td>
                <td class="long">17200</td>
                <td class="long">-</td>
                <td class="long">18200</td>
                <td class="long">-</td>
                <td class="long">19400</td>
                <td class="long">-</td>
                <td class="long">20600</td>
                <td class="long">-</td>
                <td class="long">21600</td>
                <td class="long">-</td>
                <td class="long">22800</td>
                <td class="long">-</td>
                <td class="long">24000</td>
                <td class="long">-</td>
                <td class="long">-</td>
                <td class="long">-</td>
                <td class="long">-</td>
                <td class="long">-</td>
                <td class="long">-</td>
                <td class="long">-</td>
                <td class="long">-</td>
                <td class="long">-</td>
                <td class="long">-</td>
                <td class="long">-</td>
                <td class="long">-</td>
                <td class="long">-</td>
                <td class="long">-</td>
                <td class="long">-</td>
            </tr>
        </table>
    </div>


    <!-- <div class="cashflow_statement">
        <table>
            <tr>
                <td rowspan="4" colspan="1"></td>
                <td colspan="24" rowspan="2">2023</td>
                <td colspan="24" rowspan="2">2024</td>
            </tr>
            <tr></tr>
            <tr>
                <td colspan="2">Jan</td>
                <td colspan="2">Feb</td>
                <td colspan="2">Mar</td>
                <td colspan="2">Apr</td>
                <td colspan="2">May</td>
                <td colspan="2">Jun</td>
                <td colspan="2">Jul</td>
                <td colspan="2">Aug</td>
                <td colspan="2">Sep</td>
                <td colspan="2">Oct</td>
                <td colspan="2">Nov</td>
                <td colspan="2">Dec</td>
                <td colspan="2">Jan</td>
                <td colspan="2">Feb</td>
                <td colspan="2">Mar</td>
                <td colspan="2">Apr</td>
                <td colspan="2">May</td>
                <td colspan="2">Jun</td>
                <td colspan="2">Jul</td>
                <td colspan="2">Aug</td>
                <td colspan="2">Sep</td>
                <td colspan="2">Oct</td>
                <td colspan="2">Nov</td>
                <td colspan="2">Dec</td>
            </tr>
            <tr>
                <td>T</td>
                <td>A</td>
                <td>T</td>
                <td>A</td>
                <td>T</td>
                <td>A</td>
                <td>T</td>
                <td>A</td>
                <td>T</td>
                <td>A</td>
                <td>T</td>
                <td>A</td>
                <td>T</td>
                <td>A</td>
                <td>T</td>
                <td>A</td>
                <td>T</td>
                <td>A</td>
                <td>T</td>
                <td>A</td>
                <td>T</td>
                <td>A</td>
                <td>T</td>
                <td>A</td>
                <td>T</td>
                <td>A</td>
                <td>T</td>
                <td>A</td>
                <td>T</td>
                <td>A</td>
                <td>T</td>
                <td>A</td>
                <td>T</td>
                <td>A</td>
                <td>T</td>
                <td>A</td>
                <td>T</td>
                <td>A</td>
                <td>T</td>
                <td>A</td>
                <td>T</td>
                <td>A</td>
                <td>T</td>
                <td>A</td>
                <td>T</td>
                <td>A</td>
                <td>T</td>
                <td>A</td>
            </tr>
        </table>
    </div> -->

    
    <!-- Cash Inflows -->
    <!-- <table class="cashflow_statement_inflows">
        <tr>
            <th rowspan="2">
                <h3>Cash Inflows</h3>
            </th>
            <th colspan="24" rowspan="1" class="year">2023</th>
            <th colspan="24" rowspan="1" class="year">2024</th>
        </tr>
        <tr>
            <td colspan="2">Jan</td>
            <td colspan="2">Feb</td>
            <td colspan="2">Mar</td>
            <td colspan="2">Apr</td>
            <td colspan="2">May</td>
            <td colspan="2">Jun</td>
            <td colspan="2">Jul</td>
            <td colspan="2">Aug</td>
            <td colspan="2">Sep</td>
            <td colspan="2">Oct</td>
            <td colspan="2">Nov</td>
            <td colspan="2">Dec</td>
            <td colspan="2">Jan</td>
            <td colspan="2">Feb</td>
            <td colspan="2">Mar</td>
            <td colspan="2">Apr</td>
            <td colspan="2">May</td>
            <td colspan="2">Jun</td>
            <td colspan="2">Jul</td>
            <td colspan="2">Aug</td>
            <td colspan="2">Sep</td>
            <td colspan="2">Oct</td>
            <td colspan="2">Nov</td>
            <td colspan="2">Dec</td>
        </tr>


        <!-- <tr>
            <th>Target</th>
            <th>Actual</th>
            <th>Target</th>
            <th>Actual</th>
        </tr> -->
        <!-- <tr class="grey-bg">
            <th class="align-left">Cash & cash equivalents</th>
            <td class="align-center">3600</td>
            <td class="align-center">-</td>
            <td class="align-center">10800</td>
            <td class="align-center">-</td>
        </tr>
        <tr>
            <td>
                <span class="label">This is the cash we currently have on hand.</span>
            </td>
        </tr>
        <tr class="grey-bg">
            <th class="align-left">Accounts receivable</th>
            <td class="align-center">0</td>
            <td class="align-center">-</td>
            <td class="align-center">0</td>
            <td class="align-center">-</td>
        </tr>
        <tr>
            <td>
                <span class="label">Money owed to us by clients for services provided.</span>
            </td>
        </tr>
        <tr class="grey-bg">
            <th class="align-left">Inventory</th>
            <td class="align-center">0</td>
            <td class="align-center">-</td>
            <td class="align-center">0</td>
            <td class="align-center">-</td>
        </tr>
        <tr>
            <td>
                <span class="label">Value of any goods or materials that we have in stock.</span>
            </td>
        </tr>
        <tr class="grey-bg">
            <th class="align-left">Plant, property & equipment</th>
            <td class="align-center">36000</td>
            <td class="align-center">-</td>
            <td class="align-center">54000</td>
            <td class="align-center">-</td>
        </tr>
        <tr>
            <td>
                <span class="label">Includes any physical assets our business owns.</span>
            </td>
        </tr> -->
        <!-- <tr class="grey-bg">
            <th class="align-left">Savings</th>
            <td class="align-center">12600</td>
            <td class="align-center">-</td>
            <td class="align-center">30600</td>
            <td class="align-center">-</td>
        </tr>
        <tr>
            <td>
                <span class="label">These are funds set aside for emergencies.</span>
            </td>
        </tr>
        <tr>
            <td></td>
        </tr>
        <tr>
            <th class="align-left">TOTAL:</th>
            <td class="align-center">52200</td>
            <td class="align-center">-</td>
            <td class="align-center">95400</td>
            <td class="align-center">-</td>
        </tr> -->
    <!-- </table> --> 

    <!-- <h3>Liabilities</h3>
    Liabilities
    <table class="balance_sheet_liabilities">
        <tr>
            <th rowspan="2"></th>
            <th colspan="2" rowspan="1"></th>
            <th colspan="2" rowspan="1"></th>
        </tr>
        <tr>
            <th>Target</th>
            <th>Actual</th>
            <th>Target</th>
            <th>Actual</th>
        </tr>
        <tr class="grey-bg">
            <th class="align-left">Accounts payable</th>
            <td class="align-center">7250</td>
            <td class="align-center">-</td>
            <td class="align-center">13500</td>
            <td class="align-center">-</td>
        </tr>
        <tr>
            <td>
                <span class="label">This is the cash we currently have on hand.</span>
            </td>
        </tr>
        <tr class="grey-bg">
            <th class="align-left">Loans</th>
            <td class="align-center">0</td>
            <td class="align-center">-</td>
            <td class="align-center">0</td>
            <td class="align-center">-</td>
        </tr>
        <tr>
            <td>
                <span class="label">Money owed to us by clients for services provided.</span>
            </td>
        </tr>
        <tr class="grey-bg">
            <th class="align-left">Director's equity</th>
            <td class="align-center">12000</td>
            <td class="align-center">-</td>
            <td class="align-center">12000</td>
            <td class="align-center">-</td>
        </tr>
        <tr>
            <td>
                <span class="label">Funds invested in the business by directors'.</span>
            </td>
        </tr>
        <tr>
            <td></td>
        </tr>
        <tr>
            <th class="align-left">TOTAL:</th>
            <td class="align-center">10250</td>
            <td class="align-center">-</td>
            <td class="align-center">16500</td>
            <td class="align-center">-</td>
        </tr>
    </table>

    <h3>Net Worth</h3>
    <table class="balance_sheet_total">
        <tr>
            <th rowspan="2"></th>
            <th colspan="2" rowspan="1"></th>
            <th colspan="2" rowspan="1"></th>
        </tr>
        <tr>
            <th>Target</th>
            <th>Actual</th>
            <th>Target</th>
            <th>Actual</th>
        </tr>
        <tr>
            <th class="align-left">TOTAL:</th>
            <td class="align-center">41950</td>
            <td class="align-center">-</td>
            <td class="align-center">78900</td>
            <td class="align-center">-</td>
        </tr>
        <tr>
            <td>
                <span class="label invisible">Money owed to us by clients for services provided.</span>
            </td>
        </tr>
    </table> -->
</div>