<script>
 import { show_finpro_menu, show_home_menu, show_legdoc_menu, show_riders_contract, show_drivers_contract, show_homepage, show_balance_sheet, show_cashflow_statement } from '../stores/store'
 import HomeMenu from '../lib/components/HomeMenu.svelte'
 import FinProMenu from '../lib/components/FinProMenu.svelte';
 import LegDocMenu from '../lib/components/LegDocMenu.svelte';
 import RidersContract from '../lib/components/RidersContract.svelte'
 import DriversContract from '../lib/components/DriversContract.svelte'
 import BalanceSheet from '../lib/components/BalanceSheet.svelte';
 import CashFlowStatement from '../lib/components/CashFlowStatement.svelte';
 import { fade } from 'svelte/transition'


 function toggleFinProMenu() {
    $show_finpro_menu = !$show_finpro_menu;
    $show_home_menu = !$show_home_menu;
 }
 function toggleLegDocMenu() {
    $show_legdoc_menu = !$show_legdoc_menu;
    $show_home_menu = !$show_home_menu;
 }
function toggleRidersContract() {
    $show_riders_contract = !$show_riders_contract;
    $show_homepage = !$show_homepage
}
function toggleDriversContract() {
    $show_drivers_contract = !$show_drivers_contract;
    $show_homepage = !$show_homepage
}
function toggleBalanceSheet() {
    $show_balance_sheet = !$show_balance_sheet;
    $show_homepage = !$show_homepage;
}

function toggleCashflowStatement() {
    $show_cashflow_statement = !$show_cashflow_statement;
    $show_homepage = !$show_homepage;
}
</script>

<style>
    .homeContainer {
        @apply grid grid-cols-home_container h-screen;
    }
    .homeHero {
        background-image: linear-gradient(90deg, rgba(3, 18, 43, 0.75) 0%, rgba(3, 18, 43, 0) 100%), url("/logisticsHero.png");
        @apply bg-center bg-cover items-center p-16 overflow-y-scroll relative;
    }
    h1, h4 {
        @apply text-white;
    }
    h1 {
        @apply text-[5rem] font-bold leading-[5.5rem] mb-8;
    }
    h4 {
        @apply leading-[3rem] text-[2rem];
    }
    .homeContent {
        @apply flex items-center justify-center;
        background: linear-gradient(180deg, #03122b 20.2%, #00287a 99.64%);
    }
</style>

<div class="homeContainer">
    <section class="homeHero">
        {#if $show_homepage}
        <div in:fade>
            <h1>A plan for a million dollar business.</h1>
            <h4>Invest in our vehicle hire company and join the road to success. Drive growth and exceptional service. Join us now!</h4>
        </div>
        {/if}
        {#if $show_riders_contract}
            <RidersContract />
        {/if}
        {#if $show_drivers_contract}
            <DriversContract />
        {/if}
        {#if $show_balance_sheet}
            <BalanceSheet />
        {/if}
        {#if $show_cashflow_statement}
            <CashFlowStatement />
        {/if}
    </section>
    <section class="homeContent">
        {#if $show_home_menu}
            <HomeMenu toggleFinPro={toggleFinProMenu} toggleLegDoc={toggleLegDocMenu} />
        {/if}
        {#if $show_finpro_menu}
            <FinProMenu 
            toggleFinPro={toggleFinProMenu} toggleBalanceSheetFN={toggleBalanceSheet}
            toggleCashflowStatementFN={toggleCashflowStatement} 
            />
        {/if}
        {#if $show_legdoc_menu}
            <LegDocMenu 
            toggleLegDoc={toggleLegDocMenu} toggleRidersContractFN={toggleRidersContract} toggleDriversContractFN={toggleDriversContract}
            />
        {/if}
    </section>
</div>