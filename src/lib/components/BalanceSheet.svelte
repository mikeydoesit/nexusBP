<script>
    import { fade } from 'svelte/transition'
</script>
<style>
    .balance_sheet_wrapper {
        background-color: rgba(255, 255, 255, 0.85);
        @apply w-full h-auto p-10;
        border: 1px solid #e0e0e0;
        box-shadow: 0 3px 6px 1px rgba(0,0,0,0.16);
    }
    .balance_sheet_liabilities, .balance_sheet_assets, .balance_sheet_total {
        @apply w-full h-auto;
    }
    .balance_sheet_assets {
        @apply mb-16;
    }
    .balance_sheet_liabilities {
        @apply mb-8;
    }
    .align-left {
        @apply text-left;
    }
    .align-center {
        @apply text-center;
    }
    .grey-bg {
    @apply bg-grey;
    }
    .label {
        @apply font-extralight text-[0.75rem] italic;
    }
    th, td {
    @apply py-2 px-3;
    }
    th {
        @apply font-semibold;
    }
    td {
        @apply font-light;
    }
    h1 {
        @apply uppercase text-center text-xl mb-8;
    }
    h3 {
        @apply text-left text-lg;
    }
</style>

<div class="balance_sheet_wrapper" in:fade>
    <h1>Balance Sheet</h1>

    <h3>Assets</h3>
    <!-- Assets  -->
    <table class="balance_sheet_assets">
        <tr>
            <th rowspan="2"></th>
            <th colspan="2" rowspan="1">2023</th>
            <th colspan="2" rowspan="1">2024</th>
        </tr>
        <tr>
            <th>Target</th>
            <th>Actual</th>
            <th>Target</th>
            <th>Actual</th>
        </tr>
        <tr class="grey-bg">
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
        </tr>
        <tr class="grey-bg">
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
        </tr>
    </table>

    <h3>Liabilities</h3>
    <!-- Liabilities -->
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
            <td class="align-center">3000</td>
            <td class="align-center">-</td>
            <td class="align-center">3000</td>
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
    </table>
</div>