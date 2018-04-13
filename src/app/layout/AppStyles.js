import styled, { injectGlobal } from "styled-components"

injectGlobal`
  body {
    margin: 0;
    padding: 0;
  }
`

export const Container = styled.div`
  margin-right: auto;
  margin-left: auto;
  height: 100%;
  z-index: 1;
  overflow: hidden;
  position: relative;
  display: flex;
  width: 100%;
`

export const BreadcrumbSpacing = styled.div`
  min-height: 48px;
`

export const MainContentStyle = styled.main`
  flex-grow: 1;
  background-color: #ced4da;
  padding: 24px;
  margin-left: 0px;
`
