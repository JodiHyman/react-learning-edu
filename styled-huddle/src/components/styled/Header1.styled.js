import styled from 'styled-components'

export const StyledHeader1 = styled.header`
.dashboard-nav-card {
    background: #1779ba;
    border-radius: 0;
    color: #fefefe;
    display: block;
    min-height: 100px;
    padding: 2rem;
    position: relative;
    width: 100%;
  }
  
  .dashboard-nav-card:hover .dashboard-nav-card-title,
  .dashboard-nav-card:hover .dashboard-nav-card-icon {
    color: #fefefe;
  }
  
  .dashboard-nav-card:hover .dashboard-nav-card-icon {
    opacity: 1;
    transition: all 0.2s ease;
  }
  
  .dashboard-nav-card-icon {
    font-size: 1.25rem;
    left: 1rem;
    opacity: 0.5;
    position: absolute;
    top: 1rem;
    transition: all 0.2s ease;
    width: auto;
  }
  
  .dashboard-nav-card-title {
    bottom: 0;
    position: absolute;
    right: 1rem;
    text-align: right;
  }
  `
  